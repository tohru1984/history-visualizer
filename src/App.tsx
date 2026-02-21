import { useState, useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { humanEvents, HumanEvent } from './data/history/index'
import { migrationPaths } from './data/migrations'
import { iceSheetGeoJSON, exposedLandGeoJSON } from './data/paleo'
import { JAPAN_ERAS, WORLD_ERAS, CHINA_ERAS } from './data/eras'
import { getLifeExpectancy } from './data/lifeExpectancy'
import { getPopulation, formatPopulation } from './data/population'
import { getTemperature } from './data/temperature'
import './App.css'

const ERAS = [
    { id: 'evolution', name: '人類の起源', min: -10000000, max: -300000, step: 10000, color: '#ff4444' },
    { id: 'early_sapiens', name: '出アフリカの胎動', min: -300000, max: -70000, step: 1000, color: '#ffaa00' },
    { id: 'great_journey', name: 'グレート・ジャーニー', min: -70000, max: -10000, step: 200, color: '#44ff44' },
    { id: 'civilization', name: '文明の興亡', min: -10000, max: 1868, step: 1, color: '#00d4ff' },
    { id: 'modern', name: '近現代', min: 1868, max: 2026, step: 0.1, color: '#ff00ff' }
];

function formatYear(year: number): string {
    if (year < 0) return `${Math.abs(Math.floor(year)).toLocaleString()} BCE`;
    if (year >= 1868) {
        const y = Math.floor(year);
        const m = Math.floor((year - y) * 12) + 1;
        const d = Math.floor((((year - y) * 12) % 1) * 30) + 1;
        return `${y}年 ${m}月 ${d}日`;
    }
    return `${Math.floor(year)} CE`;
}

function App() {
    const [year, setYear] = useState(-7000000)
    const [activeEra, setActiveEra] = useState('evolution')
    const [showPaleo, setShowPaleo] = useState(true)
    const [showJapanEras, setShowJapanEras] = useState(true)
    const [showChinaEras, setShowChinaEras] = useState(true)
    const [showWorldEras, setShowWorldEras] = useState(true)
    const [showLifeExp, setShowLifeExp] = useState(true)
    const [showPopulation, setShowPopulation] = useState(true)
    const [showTemperature, setShowTemperature] = useState(true)
    const [showWars, setShowWars] = useState(true)
    const [showMegafauna, setShowMegafauna] = useState(true)
    const [showHominins, setShowHominins] = useState(true)
    const [showAllPast, setShowAllPast] = useState(false)
    const [detailLevel, setDetailLevel] = useState<number>(3) // 1: Detail, 3: Normal, 5: Major
    const [selectedEvent, setSelectedEvent] = useState<HumanEvent | null>(null)
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<maplibregl.Map | null>(null)

    const currentEraData = ERAS.find(e => e.id === activeEra) || ERAS[0];

    useEffect(() => {
        if (map.current || !mapContainer.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
            center: [138, 38],
            zoom: 3,
            renderWorldCopies: true
        });

        map.current.on('load', () => {
            if (!map.current) return;

            map.current.addSource('exposed-land', { type: 'geojson', data: exposedLandGeoJSON });
            map.current.addLayer({
                id: 'exposed-land-layer',
                type: 'fill',
                source: 'exposed-land',
                paint: { 'fill-color': '#c2b280', 'fill-opacity': 0.3 }
            });

            map.current.addSource('ice-sheets', { type: 'geojson', data: iceSheetGeoJSON });
            map.current.addLayer({
                id: 'ice-sheet-layer',
                type: 'fill',
                source: 'ice-sheets',
                paint: { 'fill-color': '#ffffff', 'fill-opacity': 0.6 }
            });

            map.current.addSource('migrations', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.current.addLayer({
                id: 'migration-layer',
                type: 'line',
                source: 'migrations',
                layout: { 'line-join': 'round', 'line-cap': 'round' },
                paint: {
                    'line-color': '#ffcc00',
                    'line-width': ['interpolate', ['linear'], ['zoom'], 1, 1, 6, 3],
                    'line-opacity': 0.6,
                    'line-dasharray': [2, 2]
                }
            });

            map.current.addSource('events', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.current.addLayer({
                id: 'event-layer',
                type: 'circle',
                source: 'events',
                paint: {
                    'circle-radius': [
                        '*',
                        ['interpolate', ['linear'], ['zoom'], 1, 1, 12, 2],
                        ['match', ['get', 'type'], 'hominin', 15, 6]
                    ],
                    'circle-color': ['get', 'color'],
                    'circle-blur': [
                        'match',
                        ['get', 'type'],
                        'hominin', 0.6,
                        0
                    ],
                    'circle-stroke-width': [
                        'match',
                        ['get', 'type'],
                        'hominin', 0,
                        2
                    ],
                    'circle-stroke-color': '#fff',
                    'circle-opacity': [
                        'match',
                        ['get', 'type'],
                        'hominin', 0.5,
                        0.8
                    ]
                }
            });

            map.current.on('click', 'event-layer', (e) => {
                if (!e.features || e.features.length === 0) return;
                const props = e.features[0].properties;

                new maplibregl.Popup({ closeButton: false, className: 'custom-popup' })
                    .setLngLat(e.lngLat)
                    .setHTML(`
            <div class="popup-content">
              <h3>${props.name}</h3>
              <p><strong>年代:</strong> ${formatYear(props.year)}</p>
              <p>${props.description}</p>
            </div>
          `)
                    .addTo(map.current!);
            });

            map.current.on('mouseenter', 'event-layer', () => {
                if (map.current) map.current.getCanvas().style.cursor = 'pointer';
            });
            map.current.on('mouseleave', 'event-layer', () => {
                if (map.current) map.current.getCanvas().style.cursor = '';
            });
        });
    }, []);

    useEffect(() => {
        if (!map.current || !map.current.isStyleLoaded()) return;

        const visibleMigrations = migrationPaths.filter(path => year >= path.year_start);
        const mGeoJSON: any = {
            type: 'FeatureCollection',
            features: visibleMigrations.map(path => ({
                type: 'Feature',
                geometry: { type: 'LineString', coordinates: path.coordinates },
                properties: {}
            }))
        };
        (map.current.getSource('migrations') as maplibregl.GeoJSONSource).setData(mGeoJSON);

        const activeEvents = showAllPast
            ? humanEvents.filter((e: HumanEvent) => year >= e.year && (showWars || e.type !== 'war') && (showMegafauna || e.type !== 'megafauna') && (showHominins || e.type !== 'hominin') && ((e.importance ?? 3) >= detailLevel))
            : humanEvents.filter((e: HumanEvent) => year >= e.year && (e.year_end ? year <= e.year_end : year <= e.year + 1000000) && (showWars || e.type !== 'war') && (showMegafauna || e.type !== 'megafauna') && (showHominins || e.type !== 'hominin') && ((e.importance ?? 3) >= detailLevel));

        const eGeoJSON: any = {
            type: 'FeatureCollection',
            features: activeEvents.map(e => ({
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [e.lon, e.lat] },
                properties: {
                    name: e.name,
                    description: e.description,
                    year: e.year,
                    type: e.type,
                    color: e.type === 'war' ? '#ff4444' : e.type === 'megafauna' ? '#8b4513' : e.type === 'hominin' ? '#ff8800' : '#ffcc00'
                }
            }))
        };
        (map.current.getSource('events') as maplibregl.GeoJSONSource).setData(eGeoJSON);

        const isPaleoYear = year < -10000;
        const isShowingPaleo = showPaleo && isPaleoYear;
        map.current.setPaintProperty('exposed-land-layer', 'fill-opacity', isShowingPaleo ? 0.3 : 0);
        map.current.setPaintProperty('ice-sheet-layer', 'fill-opacity', isShowingPaleo ? 0.6 : 0);

    }, [year, showPaleo, showAllPast]);

    const handleEraChange = (eraId: string) => {
        const era = ERAS.find(e => e.id === eraId);
        if (era) {
            setActiveEra(eraId);
            setYear(era.min);
        }
    }

    const toggleFullscreen = () => {
        const container = document.querySelector('.app-container');
        if (!document.fullscreenElement && container) {
            container.requestFullscreen().catch(err => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    const japanEras = JAPAN_ERAS.filter(e => year >= e.start && year < e.end);
    const chinaEras = CHINA_ERAS.filter(e => year >= e.start && year < e.end);
    const worldEras = WORLD_ERAS.filter(e => year >= e.start && year < e.end);
    const lifeExp = getLifeExpectancy(year);
    const population = getPopulation(year);
    const temperature = getTemperature(year);

    const getActiveEffects = () => {
        const effects = [];
        // ボトルネック / 自然の脅威 (危機的状況)
        if (year >= -75000 && year <= -71000) {
            effects.push({ type: 'crisis', class: 'crisis-toba', title: '⚠️ BOTTLE NECK', desc: 'トバ火山超巨大噴火 / 人類絶滅の危機' });
        }
        if (year >= -26000 && year <= -19000) {
            effects.push({ type: 'crisis', class: 'crisis-ice', title: '❄️ ICE AGE', desc: '最終氷期最盛期 (LGM) / 極寒の時代' });
        }

        // テクノロジー解放 (Technology Unlocks)
        if (year >= -2600000 && year <= -2300000) {
            effects.push({ type: 'tech', class: 'tech-stone', title: '🪨 技 術 解 放', desc: '打 製 石 器' });
        }
        if (year >= -1000000 && year <= -700000) {
            effects.push({ type: 'tech', class: 'tech-fire', title: '🔥 技 術 解 放', desc: '火 の 支 配' });
        }
        if (year >= -12000 && year <= -8000) {
            effects.push({ type: 'tech', class: 'tech-agri', title: '🌾 技 術 解 放', desc: '農 耕 と 牧 畜' });
        }
        if (year >= 1760 && year <= 1840) {
            effects.push({ type: 'tech', class: 'tech-industry', title: '⚙️ 技 術 解 放', desc: '産 業 革 命' });
        }
        if (year >= 2022 && year <= 2040) {
            effects.push({ type: 'tech', class: 'tech-ai', title: '🤖 技 術 解 放', desc: '生 成 AI の 勃 興' });
        }
        return effects;
    };

    const activeEffects = getActiveEffects();

    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo">
                    <span className="icon">🌍</span>
                    <h1>History Visualizer</h1>
                </div>
                <div className="era-tabs">
                    {ERAS.map(era => (
                        <button
                            key={era.id}
                            className={`era-tab ${activeEra === era.id ? 'active' : ''}`}
                            onClick={() => handleEraChange(era.id)}
                            style={{ '--era-color': era.color } as any}
                        >
                            {era.name}
                        </button>
                    ))}
                    <div className="detail-filter">
                        <span>情報量:</span>
                        <button className={`detail-btn ${detailLevel === 5 ? 'active' : ''}`} onClick={() => setDetailLevel(5)}>厳選</button>
                        <button className={`detail-btn ${detailLevel === 3 ? 'active' : ''}`} onClick={() => setDetailLevel(3)}>標準</button>
                        <button className={`detail-btn ${detailLevel === 1 ? 'active' : ''}`} onClick={() => setDetailLevel(1)}>詳細</button>
                    </div>
                    <button className="era-tab" onClick={toggleFullscreen} style={{ marginLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                        ⛶ 全画面
                    </button>
                </div>
            </header>

            <main>
                <div className="map-view" ref={mapContainer} />

                {/* 状態演出 (画面オーバーレイと文字) */}
                {activeEffects.map((effect, index) => (
                    <div key={index} className={`screen-overlay ${effect.class}`}>
                        <div className={`effect-banner ${effect.type}`}>
                            <div className="effect-title">{effect.title}</div>
                            <div className="effect-desc">{effect.desc}</div>
                        </div>
                    </div>
                ))}

                {showLifeExp && (
                    <div className="status-badge life-exp-badge">
                        <div className="badge-label">推定平均寿命</div>
                        <div className="badge-value">{lifeExp} <span className="unit">歳</span></div>
                    </div>
                )}

                {showPopulation && (
                    <div className="status-badge population-badge">
                        <div className="badge-group">
                            <div className="badge-item">
                                <div className="badge-label">世界人口</div>
                                <div className="badge-value">{formatPopulation(population.world)} <span className="unit">人</span></div>
                            </div>
                            <div className="badge-item">
                                <div className="badge-label">日本人口</div>
                                <div className="badge-value">{formatPopulation(population.japan)} <span className="unit">人</span></div>
                            </div>
                        </div>
                    </div>
                )}

                {showTemperature && (
                    <div className="status-badge temperature-badge">
                        <div className="badge-label">世界の平均気温</div>
                        <div className="badge-value">{temperature.toFixed(1)} <span className="unit">℃</span></div>
                    </div>
                )}

                <aside className="history-sidebar">
                    <div className="sidebar-section">
                        <h2>Visual Controls</h2>
                        <div className="controls-grid">
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showPaleo} onChange={() => setShowPaleo(!showPaleo)} />
                                <span className="slider"></span>
                                <span className="label">Paleo View (Ice/Land)</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showJapanEras} onChange={() => setShowJapanEras(!showJapanEras)} />
                                <span className="slider"></span>
                                <span className="label">Japan Era Labels</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showChinaEras} onChange={() => setShowChinaEras(!showChinaEras)} />
                                <span className="slider"></span>
                                <span className="label">China Era Labels</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showWorldEras} onChange={() => setShowWorldEras(!showWorldEras)} />
                                <span className="slider"></span>
                                <span className="label">World Era Labels</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showLifeExp} onChange={() => setShowLifeExp(!showLifeExp)} />
                                <span className="slider"></span>
                                <span className="label">平均寿命を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showPopulation} onChange={() => setShowPopulation(!showPopulation)} />
                                <span className="slider"></span>
                                <span className="label">人口統計を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showTemperature} onChange={() => setShowTemperature(!showTemperature)} />
                                <span className="slider"></span>
                                <span className="label">平均気温を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showWars} onChange={() => setShowWars(!showWars)} />
                                <span className="slider"></span>
                                <span className="label">戦争・紛争を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showMegafauna} onChange={() => setShowMegafauna(!showMegafauna)} />
                                <span className="slider"></span>
                                <span className="label">巨大生物を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showHominins} onChange={() => setShowHominins(!showHominins)} />
                                <span className="slider"></span>
                                <span className="label">他の人類を表示</span>
                            </label>
                            <label className="toggle-switch">
                                <input type="checkbox" checked={showAllPast} onChange={() => setShowAllPast(!showAllPast)} />
                                <span className="slider"></span>
                                <span className="label">過去マーカーを維持</span>
                            </label>
                        </div>
                    </div>

                    <div className="sidebar-section scrollable">
                        <h2>History Log</h2>
                        <div className="event-list">
                            {humanEvents
                                .filter(e => year >= e.year && year <= (e.year_end || e.year + 1000000))
                                .filter(e => showWars || e.type !== 'war')
                                .filter(e => showMegafauna || e.type !== 'megafauna')
                                .filter(e => showHominins || e.type !== 'hominin')
                                .filter(e => ((e.importance ?? 3) >= detailLevel))
                                .sort((a, b) => b.year - a.year)
                                .map(e => (
                                    <div key={e.id} className="event-card" onClick={() => {
                                        setSelectedEvent(e);
                                        if (map.current) map.current.flyTo({ center: [e.lon, e.lat], zoom: 6 })
                                    }}>
                                        <div className="event-year">{formatYear(e.year)}</div>
                                        <div className="event-name">{e.name}</div>
                                        <div className="event-desc">{e.description}</div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </aside>

                {selectedEvent && (
                    <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
                        <div className="detail-modal" onClick={e => e.stopPropagation()}>
                            <button className="close-btn" onClick={() => setSelectedEvent(null)}>×</button>
                            {selectedEvent.imageUrl && (
                                <div className="modal-image">
                                    <img src={selectedEvent.imageUrl} alt={selectedEvent.name} />
                                </div>
                            )}
                            <div className="modal-content">
                                <div className="modal-era-tag">{selectedEvent.type.toUpperCase()}</div>
                                <div className="modal-year">{formatYear(selectedEvent.year)}</div>
                                <h2 className="modal-title">{selectedEvent.name}</h2>
                                <p className="modal-description">{selectedEvent.description}</p>
                                {selectedEvent.sourceUrl && (
                                    <div className="modal-footer">
                                        <a href={selectedEvent.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-button">
                                            Wikipediaで詳しく見る ↗
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer>
                <div className="timeline-container">
                    <div className="era-overlays">
                        <div className={`era-row japan-eras ${showJapanEras ? 'visible' : ''}`}>
                            <div className="era-label">Japan</div>
                            <div className="era-name-display">
                                {japanEras.map(e => (
                                    <div key={e.id} className="era-tag" style={{ color: e.color }}>{e.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className={`era-row china-eras ${showChinaEras ? 'visible' : ''}`}>
                            <div className="era-label">China</div>
                            <div className="era-name-display">
                                {chinaEras.map(e => (
                                    <div key={e.id} className="era-tag" style={{ color: e.color }}>{e.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className={`era-row world-eras ${showWorldEras ? 'visible' : ''}`}>
                            <div className="era-label">World</div>
                            <div className="era-name-display">
                                {worldEras.map(e => (
                                    <div key={e.id} className="era-tag" style={{ color: e.color }}>{e.name}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="controls">
                        <div className="year-display">
                            {formatYear(year)}
                        </div>
                        <input
                            type="range"
                            min={currentEraData.min}
                            max={currentEraData.max}
                            step={currentEraData.step}
                            value={year}
                            onChange={(e) => setYear(parseFloat(e.target.value))}
                            className="timeline-slider"
                            style={{ '--accent-color': currentEraData.color } as any}
                        />
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
