import { useState, useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { humanEvents, HumanEvent } from './data/history/index'
import { migrationPaths } from './data/migrations'
import { iceSheetGeoJSON, exposedLandGeoJSON } from './data/paleo'
import { HistoricalEra, JAPAN_ERAS, WORLD_ERAS, CHINA_ERAS, USA_ERAS, UK_ERAS, FRANCE_ERAS, GERMANY_ERAS } from './data/eras'
import { getLifeExpectancy } from './data/lifeExpectancy'
import { getPopulation, formatPopulation } from './data/population'
import { getTemperature } from './data/temperature'
import { WW2_FACTIONS, WW2_MOVEMENTS } from './data/wars/ww2'
import './App.css'

const ERAS = [
    { id: 'evolution', name: '人類の起源', name_en: 'Evolution', min: -10000000, max: -300000, step: 10000, color: '#ff4444' },
    { id: 'early_sapiens', name: '出アフリカの胎動', name_en: 'Early Sapiens', min: -300000, max: -70000, step: 1000, color: '#ffaa00' },
    { id: 'great_journey', name: 'グレート・ジャーニー', name_en: 'Great Journey', min: -70000, max: -10000, step: 200, color: '#44ff44' },
    { id: 'civilization', name: '文明の興亡', name_en: 'Civilizations', min: -10000, max: 1868, step: 1, color: '#00d4ff' },
    { id: 'modern', name: '近現代', name_en: 'Modern Era', min: 1868, max: 2026, step: 0.1, color: '#ff00ff' }
];

function formatYear(year: number, lang: 'ja' | 'en' = 'ja'): string {
    const isBCE = year < 0;
    const absYear = Math.abs(Math.floor(year));

    if (isBCE) {
        return lang === 'ja' ? `紀元前 ${absYear.toLocaleString()} 年` : `${absYear.toLocaleString()} BCE`;
    }

    if (year >= 1868) {
        const y = Math.floor(year);
        const m = Math.floor((year - y) * 12) + 1;
        const d = Math.floor((((year - y) * 12) % 1) * 30) + 1;
        return lang === 'ja'
            ? `${y}年 ${m}月 ${d}日`
            : `${y}-${m.toString().padStart(2, '0')}-${d.toString().padStart(2, '0')}`;
    }

    return lang === 'ja' ? `西暦 ${absYear.toLocaleString()} 年` : `${absYear.toLocaleString()} CE`;
}

function App() {
    const [year, setYear] = useState(-7000000)
    const [activeEra, setActiveEra] = useState('evolution')
    const [showPaleo, setShowPaleo] = useState(true)
    const [showJapanEras, setShowJapanEras] = useState(true)
    const [showChinaEras, setShowChinaEras] = useState(true)
    const [showUSAEras, setShowUSAEras] = useState(false)
    const [showUKEras, setShowUKEras] = useState(false)
    const [showFranceEras, setShowFranceEras] = useState(false)
    const [showGermanyEras, setShowGermanyEras] = useState(false)
    const [showWorldEras, setShowWorldEras] = useState(true)
    const [showLifeExp, setShowLifeExp] = useState(true)
    const [showPopulation, setShowPopulation] = useState(true)
    const [showTemperature, setShowTemperature] = useState(true)
    const [showWars, setShowWars] = useState(true)
    const [showMegafauna, setShowMegafauna] = useState(true)
    const [showHominins, setShowHominins] = useState(true)
    const [showAllPast, setShowAllPast] = useState(false)
    const [showMigrationRoutes, setShowMigrationRoutes] = useState(true)
    const [showEvolution, setShowEvolution] = useState(true)
    const [showCivilization, setShowCivilization] = useState(true)
    const [showMigration, setShowMigration] = useState(true)
    const [showModern, setShowModern] = useState(true)
    const [showWW2, setShowWW2] = useState(false)
    const [detailLevel, setDetailLevel] = useState<number>(3) // 1: Detail, 3: Normal, 5: Major
    const [language, setLanguage] = useState<'ja' | 'en'>('ja')
    const [selectedEvent, setSelectedEvent] = useState<HumanEvent | null>(null)
    const mapContainer = useRef<HTMLDivElement>(null)
    const map = useRef<maplibregl.Map | null>(null)

    // Dispatch language change to index.html i18n
    useEffect(() => {
        window.dispatchEvent(new CustomEvent('language-change', { detail: { language } }));
    }, [language]);

    // Toggle migration route layers visibility on map
    useEffect(() => {
        if (!map.current || !map.current.isStyleLoaded()) return;
        const vis = showMigrationRoutes ? 'visible' : 'none';
        ['migration-layer', 'migrations-arrows', 'migration-head-layer'].forEach(id => {
            if (map.current!.getLayer(id)) map.current!.setLayoutProperty(id, 'visibility', vis);
        });
    }, [showMigrationRoutes]);

    // Auto-disable features when detailLevel hides their toggles
    useEffect(() => {
        if (detailLevel > 3) {
            // Major mode: hide Normal-level features
            setShowJapanEras(false);
            setShowLifeExp(false);
            setShowTemperature(false);
            setShowWars(false);
        }
        if (detailLevel > 1) {
            // Major or Normal: hide All-level features
            setShowChinaEras(false);
            setShowMegafauna(false);
            setShowHominins(false);
            setShowAllPast(false);
        }
    }, [detailLevel]);

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

            // Add arrow symbols along the migration paths
            map.current.addLayer({
                id: 'migrations-arrows',
                type: 'symbol',
                source: 'migrations',
                layout: {
                    'symbol-placement': 'line',
                    'text-field': '▶',
                    'text-size': 14,
                    'symbol-spacing': 50,
                    'text-keep-upright': false
                },
                paint: {
                    'text-color': '#ffcc00',
                    'text-opacity': 0.8
                }
            });

            // Add source and layer for the moving "head" of migration
            map.current.addSource('migration-heads', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.current.addLayer({
                id: 'migration-head-layer',
                type: 'circle',
                source: 'migration-heads',
                paint: {
                    'circle-radius': 5,
                    'circle-color': '#fff',
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#ffcc00',
                    'circle-opacity': 0.9
                }
            });

            map.current.addSource('events', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: [] }
            });

            map.current.addLayer({
                id: 'event-layer-base',
                type: 'circle',
                source: 'events',
                filter: ['!=', ['get', 'type'], 'hominin'],
                paint: {
                    'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 6, 12, 12],
                    'circle-color': ['get', 'color'],
                    'circle-blur': 0,
                    'circle-stroke-width': 2,
                    'circle-stroke-color': '#fff',
                    'circle-opacity': 0.8
                }
            });

            map.current.addLayer({
                id: 'event-layer-hominin',
                type: 'circle',
                source: 'events',
                filter: ['==', ['get', 'type'], 'hominin'],
                paint: {
                    'circle-radius': ['interpolate', ['linear'], ['zoom'], 1, 15, 12, 35],
                    'circle-color': ['get', 'color'],
                    'circle-blur': 0.6,
                    'circle-stroke-width': 0,
                    'circle-opacity': 0.5
                }
            });

            ['event-layer-base', 'event-layer-hominin'].forEach(layer => {
                map.current!.on('click', layer, (e) => {
                    if (!e.features || e.features.length === 0) return;
                    const props = e.features[0].properties;

                    new maplibregl.Popup({ closeButton: false, className: 'custom-popup' })
                        .setLngLat(e.lngLat)
                        .setHTML(`
                <div class="popup-content">
                  <h3>${language === 'ja' ? (props.name_ja || props.name) : (props.name_en || props.id || props.name)}</h3>
                  <p><strong>${language === 'ja' ? '年代' : 'Year'}:</strong> ${formatYear(props.year, language)}</p>
                  <p>${language === 'ja' ? (props.description_ja || props.description) : (props.description_en || props.description)}</p>
                </div>
              `)
                        .addTo(map.current!);
                });

                map.current!.on('mouseenter', layer, () => {
                    if (map.current) map.current.getCanvas().style.cursor = 'pointer';
                });
                map.current!.on('mouseleave', layer, () => {
                    if (map.current) map.current.getCanvas().style.cursor = '';
                });
            });

            // WWII Layers
            map.current.addSource('ww2-factions', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
            map.current.addLayer({
                id: 'ww2-factions-layer',
                type: 'fill',
                source: 'ww2-factions',
                paint: {
                    'fill-color': ['get', 'color'],
                    'fill-opacity': 0.4
                }
            });

            map.current.addSource('ww2-movements', { type: 'geojson', data: { type: 'FeatureCollection', features: [] } });
            map.current.addLayer({
                id: 'ww2-movements-layer',
                type: 'line',
                source: 'ww2-movements',
                paint: {
                    'line-color': '#ffcc00',
                    'line-width': 2,
                    'line-dasharray': [2, 1]
                }
            });
            map.current.addLayer({
                id: 'ww2-movements-arrows',
                type: 'symbol',
                source: 'ww2-movements',
                layout: {
                    'symbol-placement': 'line',
                    'text-field': '▶',
                    'text-size': 12,
                    'symbol-spacing': 40
                },
                paint: { 'text-color': '#ffcc00' }
            });
        });
    }, []);

    useEffect(() => {
        if (!map.current || !map.current.isStyleLoaded()) return;

        const visibleMigrations = migrationPaths.filter(path => year >= path.year_start);
        const mGeoJSON: any = {
            type: 'FeatureCollection',
            features: visibleMigrations.map(path => {
                const progress = Math.min(1, (year - path.year_start) / (path.year_end - path.year_start));
                const numNodes = path.coordinates.length;
                const activeNodes = Math.max(2, Math.ceil(progress * numNodes));
                const currentCoords = path.coordinates.slice(0, activeNodes);
                const headIdx = Math.min(numNodes - 1, Math.floor(progress * (numNodes - 1)));
                const nextIdx = Math.min(numNodes - 1, headIdx + 1);
                const t = (progress * (numNodes - 1)) % 1;
                const headPos = [
                    path.coordinates[headIdx][0] + (path.coordinates[nextIdx][0] - path.coordinates[headIdx][0]) * t,
                    path.coordinates[headIdx][1] + (path.coordinates[nextIdx][1] - path.coordinates[headIdx][1]) * t
                ];
                return {
                    type: 'Feature',
                    geometry: { type: 'LineString', coordinates: currentCoords },
                    properties: { name: language === 'ja' ? path.name_ja : path.name_en, headPos: headPos }
                };
            })
        };
        (map.current.getSource('migrations') as maplibregl.GeoJSONSource).setData(mGeoJSON);

        if (map.current.getSource('migration-heads')) {
            const headGeoJSON: any = {
                type: 'FeatureCollection',
                features: visibleMigrations.map(path => {
                    const progress = Math.min(1, (year - path.year_start) / (path.year_end - path.year_start));
                    const numNodes = path.coordinates.length;
                    const headIdx = Math.min(numNodes - 1, Math.floor(progress * (numNodes - 1)));
                    const nextIdx = Math.min(numNodes - 1, headIdx + 1);
                    const t = (progress * (numNodes - 1)) % 1;
                    const headPos = [
                        path.coordinates[headIdx][0] + (path.coordinates[nextIdx][0] - path.coordinates[headIdx][0]) * t,
                        path.coordinates[headIdx][1] + (path.coordinates[nextIdx][1] - path.coordinates[headIdx][1]) * t
                    ];
                    return {
                        type: 'Feature',
                        geometry: { type: 'Point', coordinates: headPos },
                        properties: { name: language === 'ja' ? path.name_ja : path.name_en }
                    };
                })
            };
            (map.current.getSource('migration-heads') as maplibregl.GeoJSONSource).setData(headGeoJSON);
        }

        // Update WWII Data
        if (map.current.getSource('ww2-factions')) {
            const isWW2Visible = showWW2 && year >= 1939 && year <= 1945;
            if (isWW2Visible) {
                (map.current.getSource('ww2-factions') as maplibregl.GeoJSONSource).setData(WW2_FACTIONS);
                (map.current.getSource('ww2-movements') as maplibregl.GeoJSONSource).setData({
                    type: 'FeatureCollection',
                    features: WW2_MOVEMENTS.features.filter((f: any) => year >= f.properties.year)
                });
                map.current.setLayoutProperty('ww2-factions-layer', 'visibility', 'visible');
                map.current.setLayoutProperty('ww2-movements-layer', 'visibility', 'visible');
                map.current.setLayoutProperty('ww2-movements-arrows', 'visibility', 'visible');
            } else {
                map.current.setLayoutProperty('ww2-factions-layer', 'visibility', 'none');
                map.current.setLayoutProperty('ww2-movements-layer', 'visibility', 'none');
                map.current.setLayoutProperty('ww2-movements-arrows', 'visibility', 'none');
            }
        }

        const activeEvents = showAllPast
            ? humanEvents.filter((e: HumanEvent) => year >= e.year && (showWars || e.type !== 'war') && (showMegafauna || e.type !== 'megafauna') && (showHominins || e.type !== 'hominin') && ((e.importance ?? 3) >= detailLevel))
            : humanEvents.filter((e: HumanEvent) => year >= e.year && (e.year_end ? year <= e.year_end : year <= e.year + getDefaultDuration(e.year)) && (showWars || e.type !== 'war') && (showMegafauna || e.type !== 'megafauna') && (showHominins || e.type !== 'hominin') && ((e.importance ?? 3) >= detailLevel));

        const eGeoJSON: any = {
            type: 'FeatureCollection',
            features: activeEvents.map(e => ({
                type: 'Feature',
                geometry: { type: 'Point', coordinates: [e.lon, e.lat] },
                properties: {
                    name: e.name, name_ja: e.name_ja, name_en: e.name_en,
                    description: e.description, description_ja: e.description_ja, description_en: e.description_en,
                    year: e.year, type: e.type,
                    color: e.type === 'war' ? '#ff4444' : e.type === 'megafauna' ? '#8b4513' : e.type === 'hominin' ? '#ff8800' : '#ffcc00'
                }
            }))
        };
        (map.current.getSource('events') as maplibregl.GeoJSONSource).setData(eGeoJSON);

        const isPaleoYear = year < -10000;
        const isShowingPaleo = showPaleo && isPaleoYear;
        map.current.setPaintProperty('exposed-land-layer', 'fill-opacity', isShowingPaleo ? 0.3 : 0);
        map.current.setPaintProperty('ice-sheet-layer', 'fill-opacity', isShowingPaleo ? 0.6 : 0);
    }, [year, showPaleo, showAllPast, showWW2, showWars, showMegafauna, showHominins, detailLevel, language, migrationPaths, humanEvents]);

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

    const handleEraClick = (e: HistoricalEra, countryNameJa: string, countryNameEn: string, lon: number, lat: number, zoom: number) => {
        setYear(e.start);
        const prefixJa = countryNameJa === '世界' ? '世界の' : `${countryNameJa}の`;
        const prefixEn = countryNameEn === 'World' ? 'Global ' : `The ${e.name} of ${countryNameEn} `;

        const syntheticEvent: HumanEvent = {
            id: `era-${e.id}`,
            name: e.name,
            name_ja: `${e.name} 開始`,
            name_en: `${e.name} Begins`,
            year: e.start,
            year_end: e.end,
            lat: lat,
            lon: lon,
            type: 'era',
            description: '',
            description_ja: `${prefixJa}「${e.name}」が始まりました。\n（期間: ${formatYear(e.start, 'ja')} 〜 ${formatYear(e.end, 'ja')}）`,
            description_en: `${prefixEn}begins.\n(Period: ${formatYear(e.start, 'en')} - ${formatYear(e.end, 'en')})`,
            importance: 5
        };
        setSelectedEvent(syntheticEvent);
        if (map.current) map.current.flyTo({ center: [lon, lat], zoom: zoom });
    };

    const japanEras = JAPAN_ERAS.filter(e => year >= e.start && year < e.end);
    const chinaEras = CHINA_ERAS.filter(e => year >= e.start && year < e.end);
    const usaEras = USA_ERAS.filter(e => year >= e.start && year < e.end);
    const ukEras = UK_ERAS.filter(e => year >= e.start && year < e.end);
    const franceEras = FRANCE_ERAS.filter(e => year >= e.start && year < e.end);
    const germanyEras = GERMANY_ERAS.filter(e => year >= e.start && year < e.end);
    const getDefaultDuration = (startYear: number) => {
        if (startYear < -100000) return 50000;
        if (startYear < -10000) return 2000;
        if (startYear < 0) return 150;
        if (startYear < 1500) return 50;
        if (startYear < 1900) return 10;
        return 3;
    };

    const lifeExp = getLifeExpectancy(year);
    const population = getPopulation(year);
    const temperature = getTemperature(year);

    const getBrainCapacity = (currentYear: number) => {
        if (!showEvolution || currentYear > 0 || currentYear < -7000000) return null;
        if (currentYear < -4000000) return 350;
        if (currentYear < -2500000) return 450;
        if (currentYear < -2000000) return 500;
        if (currentYear < -1500000) return 600;
        if (currentYear < -1000000) return 850;
        if (currentYear < -500000) return 1000;
        if (currentYear < -300000) return 1200;
        if (currentYear < -100000) return 1350;
        return 1400;
    };
    const brainCapacity = getBrainCapacity(year);

    // WWII Status Logic
    const getWW2Status = (currentYear: number) => {
        if (!showWW2 || currentYear < 1939 || currentYear > 1945.7) return null;

        let phase = '';
        if (currentYear >= 1939 && currentYear < 1941.5) {
            phase = language === 'ja' ? '初期 (枢軸国の拡大)' : 'Early Phase (Axis Expansion)';
        } else if (currentYear >= 1941.5 && currentYear < 1943) {
            phase = language === 'ja' ? '激戦・転換期' : 'Turning Points';
        } else if (currentYear >= 1943 && currentYear < 1944.5) {
            phase = language === 'ja' ? '連合国への反攻' : 'Allied Counter-Offensive';
        } else {
            phase = language === 'ja' ? '枢軸国の崩壊・終結' : 'Axis Collapse & End';
        }

        return {
            phase,
            factions: language === 'ja' ? '枢軸国 vs 連合国' : 'Axis vs Allies',
            casualties: language === 'ja' ? '約6,000万人' : '~60 Million'
        };
    };
    const ww2Status = getWW2Status(year);

    const getActiveEffects = () => {
        const effects = [];
        // ボトルネック / 自然の脅威 (危機的状況)
        if (year >= -75000 && year <= -71000) {
            effects.push({
                type: 'crisis', class: 'crisis-toba',
                title: language === 'ja' ? '⚠️ BOTTLE NECK' : '⚠️ BOTTLE NECK',
                desc: language === 'ja' ? 'トバ火山超巨大噴火 / 人類絶滅の危機' : 'Toba Supervolcano / Near-Extinction Crisis'
            });
        }
        if (year >= -26000 && year <= -19000) {
            effects.push({
                type: 'crisis', class: 'crisis-ice',
                title: language === 'ja' ? '❄️ ICE AGE' : '❄️ ICE AGE',
                desc: language === 'ja' ? '最終氷期最盛期 (LGM) / 極寒の時代' : 'Last Glacial Maximum (LGM)'
            });
        }

        // テクノロジー解放 (Technology Unlocks)
        if (year >= -2600000 && year <= -2300000) {
            effects.push({
                type: 'tech', class: 'tech-stone',
                title: language === 'ja' ? '🪨 技 術 解 放' : '🪨 TECH UNLOCK',
                desc: language === 'ja' ? '打 製 石 器' : 'Stone Tools'
            });
        }
        if (year >= -1000000 && year <= -700000) {
            effects.push({
                type: 'tech', class: 'tech-fire',
                title: language === 'ja' ? '🔥 技 術 解 放' : '🔥 TECH UNLOCK',
                desc: language === 'ja' ? '火 の 支 配' : 'Control of Fire'
            });
        }
        if (year >= -12000 && year <= -8000) {
            effects.push({
                type: 'tech', class: 'tech-agri',
                title: language === 'ja' ? '🌾 技 術 解 放' : '🌾 TECH UNLOCK',
                desc: language === 'ja' ? '農 耕 と 牧 畜' : 'Agriculture & Livestock'
            });
        }
        if (year >= 1760 && year <= 1840) {
            effects.push({
                type: 'tech', class: 'tech-industry',
                title: language === 'ja' ? '⚙️ 技 術 解 放' : '⚙️ TECH UNLOCK',
                desc: language === 'ja' ? '産 業 革 命' : 'Industrial Revolution'
            });
        }
        if (year >= 2022 && year <= 2040) {
            effects.push({
                type: 'tech', class: 'tech-ai',
                title: language === 'ja' ? '🤖 技 術 解 放' : '🤖 TECH UNLOCK',
                desc: language === 'ja' ? '生 成 AI の 勃 興' : 'Rise of Generative AI'
            });
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
                            {language === 'ja' ? era.name : (era as any).name_en}
                        </button>
                    ))}

                    <button className="era-tab" onClick={() => setLanguage(lang => lang === 'ja' ? 'en' : 'ja')} style={{ marginLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem', fontWeight: 'bold' }}>
                        🌐 {language === 'ja' ? 'EN' : 'JA'}
                    </button>

                    <div className="detail-filter">
                        <span>{language === 'ja' ? '情報量:' : 'Detail:'}</span>
                        <button className={`detail-btn ${detailLevel === 5 ? 'active' : ''}`} onClick={() => setDetailLevel(5)}>{language === 'ja' ? '厳選' : 'Major'}</button>
                        <button className={`detail-btn ${detailLevel === 3 ? 'active' : ''}`} onClick={() => setDetailLevel(3)}>{language === 'ja' ? '標準' : 'Normal'}</button>
                        <button className={`detail-btn ${detailLevel === 1 ? 'active' : ''}`} onClick={() => setDetailLevel(1)}>{language === 'ja' ? '詳細' : 'All'}</button>
                    </div>
                    <button className="era-tab" onClick={toggleFullscreen} style={{ marginLeft: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem' }}>
                        ⛶ {language === 'ja' ? '全画面' : 'Fullscreen'}
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
                        <div className="badge-label">{language === 'ja' ? '推定平均寿命' : 'Life Expectancy'}</div>
                        <div className="badge-value">{lifeExp} <span className="unit">{language === 'ja' ? '歳' : 'yrs'}</span></div>
                    </div>
                )}

                {showPopulation && (
                    <div className="status-badge population-badge">
                        <div className="badge-group">
                            <div className="badge-item">
                                <div className="badge-label">{language === 'ja' ? '世界人口' : 'World Pop.'}</div>
                                <div className="badge-value">{formatPopulation(population.world)} <span className="unit">{language === 'ja' ? '人' : ''}</span></div>
                            </div>
                            <div className="badge-item">
                                <div className="badge-label">{language === 'ja' ? '日本人口' : 'Japan Pop.'}</div>
                                <div className="badge-value">{formatPopulation(population.japan)} <span className="unit">{language === 'ja' ? '人' : ''}</span></div>
                            </div>
                        </div>
                    </div>
                )}

                {showTemperature && (
                    <div className="status-badge temperature-badge">
                        <div className="badge-label">{language === 'ja' ? '世界の平均気温' : 'Avg Temp'}</div>
                        <div className="badge-value">{temperature.toFixed(1)} <span className="unit">℃</span></div>
                    </div>
                )}

                {brainCapacity && (
                    <div className="status-badge" style={{ marginTop: '0.5rem', background: 'rgba(56, 189, 248, 0.15)', borderLeft: '4px solid #38bdf8' }}>
                        <div className="badge-group">
                            <div className="badge-item" style={{ minWidth: '100%' }}>
                                <div className="badge-label" style={{ color: '#bae6fd' }}>{language === 'ja' ? '推定 脳容積' : 'Est. Brain Capacity'}</div>
                                <div className="badge-value" style={{ fontSize: '1.2rem', color: '#e0f2fe' }}>{brainCapacity} <span className="unit" style={{ fontSize: '0.9rem', color: '#bae6fd' }}>cc</span></div>
                            </div>
                        </div>
                    </div>
                )}

                {ww2Status && (
                    <div className="status-badge" style={{ marginTop: '0.5rem', background: 'rgba(255, 68, 68, 0.15)', borderLeft: '4px solid #ff4444' }}>
                        <div className="badge-group">
                            <div className="badge-item" style={{ minWidth: '100%', marginBottom: '0.5rem' }}>
                                <div className="badge-label" style={{ color: '#ffaaaa' }}>{language === 'ja' ? '第2次世界大戦' : 'WWII Status'}</div>
                                <div className="badge-value" style={{ fontSize: '1.2rem', color: '#ffdddd' }}>{ww2Status.phase}</div>
                            </div>
                            <div className="badge-item" style={{ marginRight: '1rem' }}>
                                <div className="badge-label" style={{ color: '#ffaaaa' }}>{language === 'ja' ? '主要陣営' : 'Factions'}</div>
                                <div className="badge-value" style={{ fontSize: '1rem' }}>{ww2Status.factions}</div>
                            </div>
                            <div className="badge-item">
                                <div className="badge-label" style={{ color: '#ffaaaa' }}>{language === 'ja' ? '総犠牲者数' : 'Casualties'}</div>
                                <div className="badge-value" style={{ fontSize: '1rem' }}>{ww2Status.casualties}</div>
                            </div>
                        </div>
                    </div>
                )}

                <aside className="history-sidebar">
                    <div className="sidebar-section scrollable" style={{ maxHeight: '40vh' }}>
                        <h2>{language === 'ja' ? '表示設定' : 'Visual Controls'}</h2>
                        <div className="controls-grid controls-compact">
                            {/* Map Overlays */}
                            <div className="controls-group-label">{language === 'ja' ? '地図表示' : 'Map'}</div>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showPaleo} onChange={() => setShowPaleo(!showPaleo)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '古地理 (氷床)' : 'Paleo View'}</span>
                            </label>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showMigrationRoutes} onChange={() => setShowMigrationRoutes(!showMigrationRoutes)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '移動ルート' : 'Migration Routes'}</span>
                            </label>

                            {/* Statistics */}
                            <div className="controls-group-label">{language === 'ja' ? '統計データ' : 'Stats'}</div>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showPopulation} onChange={() => setShowPopulation(!showPopulation)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '人口' : 'Population'}</span>
                            </label>
                            {detailLevel <= 3 && (
                                <>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showLifeExp} onChange={() => setShowLifeExp(!showLifeExp)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '平均寿命' : 'Life Exp.'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showTemperature} onChange={() => setShowTemperature(!showTemperature)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '平均気温' : 'Temperature'}</span>
                                    </label>
                                </>
                            )}

                            {/* Era Labels */}
                            <div className="controls-group-label">{language === 'ja' ? '時代区分' : 'Era Labels'}</div>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showWorldEras} onChange={() => setShowWorldEras(!showWorldEras)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '世界' : 'World'}</span>
                            </label>
                            {detailLevel <= 3 && (
                                <label className="toggle-switch mini">
                                    <input type="checkbox" checked={showJapanEras} onChange={() => setShowJapanEras(!showJapanEras)} />
                                    <span className="slider"></span>
                                    <span className="label">{language === 'ja' ? '日本' : 'Japan'}</span>
                                </label>
                            )}
                            {detailLevel <= 1 && (
                                <>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showChinaEras} onChange={() => setShowChinaEras(!showChinaEras)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '中国' : 'China'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showUSAEras} onChange={() => setShowUSAEras(!showUSAEras)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? 'アメリカ' : 'USA'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showUKEras} onChange={() => setShowUKEras(!showUKEras)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? 'イギリス' : 'UK'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showFranceEras} onChange={() => setShowFranceEras(!showFranceEras)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? 'フランス' : 'France'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showGermanyEras} onChange={() => setShowGermanyEras(!showGermanyEras)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? 'ドイツ' : 'Germany'}</span>
                                    </label>
                                </>
                            )}

                            {/* Event Types */}
                            <div className="controls-group-label">{language === 'ja' ? 'イベント種別' : 'Events'}</div>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showEvolution} onChange={() => setShowEvolution(!showEvolution)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '進化' : 'Evolution'}</span>
                            </label>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showCivilization} onChange={() => setShowCivilization(!showCivilization)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '文明' : 'Civilization'}</span>
                            </label>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showMigration} onChange={() => setShowMigration(!showMigration)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '移動' : 'Migration'}</span>
                            </label>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showModern} onChange={() => setShowModern(!showModern)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '近現代' : 'Modern'}</span>
                            </label>
                            <label className="toggle-switch mini">
                                <input type="checkbox" checked={showWW2} onChange={() => setShowWW2(!showWW2)} />
                                <span className="slider"></span>
                                <span className="label">{language === 'ja' ? '第二次世界大戦' : 'WWII'}</span>
                            </label>
                            {detailLevel <= 3 && (
                                <label className="toggle-switch mini">
                                    <input type="checkbox" checked={showWars} onChange={() => setShowWars(!showWars)} />
                                    <span className="slider"></span>
                                    <span className="label">{language === 'ja' ? '戦争' : 'Wars'}</span>
                                </label>
                            )}
                            {detailLevel <= 1 && (
                                <>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showMegafauna} onChange={() => setShowMegafauna(!showMegafauna)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '巨大生物' : 'Megafauna'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showHominins} onChange={() => setShowHominins(!showHominins)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '他の人類' : 'Hominins'}</span>
                                    </label>
                                    <label className="toggle-switch mini">
                                        <input type="checkbox" checked={showAllPast} onChange={() => setShowAllPast(!showAllPast)} />
                                        <span className="slider"></span>
                                        <span className="label">{language === 'ja' ? '過去マーカー維持' : 'Keep Past'}</span>
                                    </label>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="sidebar-section scrollable">
                        <h2>{language === 'ja' ? 'イベント一覧' : 'History Log'}</h2>
                        <div className="event-list">
                            {humanEvents
                                .filter(e => year >= e.year && year <= (e.year_end || e.year + getDefaultDuration(e.year)))
                                .filter(e => showWars || e.type !== 'war')
                                .filter(e => showMegafauna || e.type !== 'megafauna')
                                .filter(e => showHominins || e.type !== 'hominin')
                                .filter(e => showEvolution || e.type !== 'evolution')
                                .filter(e => showCivilization || e.type !== 'civilization')
                                .filter(e => showMigration || e.type !== 'migration')
                                .filter(e => showModern || e.type !== 'modern')
                                .filter(e => ((e.importance ?? 3) >= detailLevel))
                                .sort((a, b) => b.year - a.year)
                                .map(e => (
                                    <div key={e.id} className="event-card" onClick={() => {
                                        setSelectedEvent(e);
                                        if (map.current) map.current.flyTo({ center: [e.lon, e.lat], zoom: 6 })
                                    }}>
                                        <div className="event-year">{formatYear(e.year, language)}</div>
                                        <div className="event-name">{language === 'ja' ? (e.name_ja || e.name) : (e.name_en || e.name)}</div>
                                        <div className="event-desc">{language === 'ja' ? (e.description_ja || e.description) : (e.description_en || e.description)}</div>
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
                                <div className="modal-year">{formatYear(selectedEvent.year, language)}</div>
                                <h2 className="modal-title">{language === 'ja' ? (selectedEvent.name_ja || selectedEvent.name) : (selectedEvent.name_en || selectedEvent.name)}</h2>
                                <p className="modal-description">{language === 'ja' ? (selectedEvent.description_ja || selectedEvent.description) : (selectedEvent.description_en || selectedEvent.description)}</p>
                                {selectedEvent.sourceUrl && (
                                    <div className="modal-footer">
                                        <a href={selectedEvent.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-button">
                                            {language === 'ja' ? 'Wikipediaで詳しく見る ↗' : 'Read more on Wikipedia ↗'}
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <footer>
                {/* Update History Summary Overlay */}
                <div className="update-summary-box">
                    <div className="update-summary-header">
                        <span>✨ Latest Updates</span>
                        <a href="update_history.html" target="_blank" rel="noopener noreferrer">{language === 'ja' ? 'すべて見る' : 'See all'}</a>
                    </div>
                    <ul className="update-list-mini">
                        <li>{language === 'ja' ? '🦣 人類の起源 最新30種+追加' : '🦣 Huge Evolution Overhaul'}</li>
                        <li>{language === 'ja' ? '🧠 推定 脳容積 の新指標' : '🧠 New Brain Capacity Metric'}</li>
                    </ul>
                </div>

                <div className="timeline-container">
                    {/* Era label rows with integrated marker tracks */}
                    <div className="era-overlays">
                        {showJapanEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = JAPAN_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row japan-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">Japan</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {japanEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, '日本', 'Japan', 138, 36, 5)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, '日本', 'Japan', 138, 36, 5)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        {showChinaEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = CHINA_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row china-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">China</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {chinaEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, '中国', 'China', 104, 35, 4)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, '中国', 'China', 104, 35, 4)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        {showUSAEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = USA_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row usa-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">USA</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {usaEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, 'アメリカ', 'USA', -97, 38, 4)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, 'アメリカ', 'USA', -97, 38, 4)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        {showUKEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = UK_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row uk-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">UK</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {ukEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, 'イギリス', 'UK', -2, 54, 5)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, 'イギリス', 'UK', -2, 54, 5)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        {showFranceEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = FRANCE_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row france-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">France</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {franceEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, 'フランス', 'France', 2, 46, 5)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, 'フランス', 'France', 2, 46, 5)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        {showGermanyEras && (() => {
                            const eraMin = currentEraData.min;
                            const eraMax = currentEraData.max;
                            const eraRange = eraMax - eraMin;
                            const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));
                            const visibleEraDots = GERMANY_ERAS.filter(e => e.start >= eraMin && e.start <= eraMax);
                            return (
                                <div className="era-row germany-eras visible" style={{ minHeight: '20px' }}>
                                    <div className="era-label">Germany</div>
                                    <div className="era-name-display" style={{ minWidth: '60px', maxWidth: '100px' }}>
                                    </div>
                                    <div className="era-timeline-container">
                                        {germanyEras.map(e => {
                                            const left = getPos(e.start);
                                            const right = getPos(e.end);
                                            const width = right - left;
                                            if (left >= 100 || right <= 0) return null;
                                            return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, 'ドイツ', 'Germany', 10, 51, 5)}>{e.name}</div>
                                        })}
                                    </div>
                                    <div className="timeline-marker-track" style={{ flex: 1 }}>
                                        {visibleEraDots.map(e => (
                                            <div
                                                key={e.id}
                                                className="timeline-marker-dot"
                                                style={{
                                                    left: `${getPos(e.start)}%`,
                                                    backgroundColor: e.color,
                                                    borderColor: year >= e.start && year < e.end ? '#fff' : e.color,
                                                    width: '7px', height: '7px'
                                                }}
                                                title={`${e.name} (${formatYear(e.start, language)})`}
                                                onClick={() => handleEraClick(e, 'ドイツ', 'Germany', 10, 51, 5)}
                                            />
                                        ))}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        })()}

                        <div className={`era-row world-eras ${showWorldEras ? 'visible' : ''}`}>
                            <div className="era-label">World</div>
                            <div className="era-name-display">
                            </div>
                            <div className="era-timeline-container">
                                {WORLD_ERAS.map(e => {
                                    const eraMin = currentEraData.min;
                                    const eraMax = currentEraData.max;
                                    const eraRange = eraMax - eraMin;
                                    const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));

                                    const left = getPos(e.start);
                                    const right = getPos(e.end);
                                    const width = right - left;
                                    if (left >= 100 || right <= 0 || width <= 0) return null;

                                    return <div key={e.id} className="era-tag clickable-era-tag" style={{ color: e.color, left: `${left}%`, width: `${width}%`, cursor: 'pointer' }} onClick={() => handleEraClick(e, '世界', 'World', 0, 20, 2)}>{e.name}</div>
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Event marker rows */}
                    {(() => {
                        const eraMin = currentEraData.min;
                        const eraMax = currentEraData.max;
                        const eraRange = eraMax - eraMin;
                        const getPos = (y: number) => Math.max(0, Math.min(100, ((y - eraMin) / eraRange) * 100));

                        // Define which event categories to show as timeline rows
                        const eventRows: { key: string; label: string; label_en: string; types: string[]; color: string; show: boolean }[] = [
                            { key: 'evolution', label: '進化', label_en: 'Evolution', types: ['evolution'], color: '#ff4444', show: showEvolution || activeEra === 'evolution' },
                            { key: 'civilization', label: '文明', label_en: 'Civilization', types: ['civilization'], color: '#00d4ff', show: showCivilization },
                            { key: 'migration', label: '移動', label_en: 'Migration', types: ['migration'], color: '#44ff44', show: showMigration || activeEra === 'evolution' },
                            { key: 'modern', label: '近現代', label_en: 'Modern', types: ['modern'], color: '#ff00ff', show: showModern },
                            { key: 'ww2', label: 'WWII', label_en: 'WWII', types: ['ww2'], color: '#ffffff', show: showWW2 },
                            { key: 'war', label: '戦争', label_en: 'Wars', types: ['war'], color: '#ff4444', show: showWars },
                            { key: 'megafauna', label: '巨大生物', label_en: 'Megafauna', types: ['megafauna'], color: '#8b4513', show: showMegafauna },
                            { key: 'hominin', label: '人類種', label_en: 'Hominins', types: ['hominin'], color: '#ff8800', show: showHominins },
                        ];

                        // Also add migration paths as timeline dots
                        const migrationDots = migrationPaths
                            .filter(p => p.year_start >= eraMin && p.year_start <= eraMax)
                            .map(p => ({
                                id: p.id,
                                year: p.year_start,
                                name: language === 'ja' ? (p.name_ja || p.name) : (p.name_en || p.name),
                                pos: getPos(p.year_start)
                            }));

                        const eventElements = eventRows.filter(row => row.show).map(row => {
                            const rowEvents = humanEvents
                                .filter(e => row.types.includes(e.type))
                                .filter(e => e.year >= eraMin && e.year <= eraMax)
                                .filter(e => (e.importance ?? 3) >= detailLevel);

                            if (rowEvents.length === 0 && row.key !== 'ww2') return null;

                            return (
                                <div key={row.key} className="era-row visible" style={{ minHeight: '18px' }}>
                                    <div className="era-label" style={{ color: row.color }}>
                                        {language === 'ja' ? row.label : row.label_en}
                                    </div>
                                    <div className="era-name-display"></div>
                                    <div className="timeline-marker-track">
                                        {row.key === 'ww2' && (
                                            <div
                                                className="timeline-duration-bar"
                                                style={{
                                                    position: 'absolute',
                                                    left: `${Math.max(0, getPos(1939))}%`,
                                                    right: `${100 - Math.min(100, getPos(1945))}%`,
                                                    top: '4px',
                                                    bottom: '4px',
                                                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                                    borderRadius: '2px',
                                                    pointerEvents: 'none'
                                                }}
                                            />
                                        )}
                                        {rowEvents.map(e => {
                                            const pos = getPos(e.year);
                                            return (
                                                <div
                                                    key={e.id}
                                                    className="timeline-marker-dot"
                                                    style={{
                                                        left: `${pos}%`,
                                                        backgroundColor: row.color,
                                                        borderColor: year >= e.year && year <= (e.year_end || e.year + (eraRange * 0.01)) ? '#fff' : row.color
                                                    }}
                                                    title={`${language === 'ja' ? (e.name_ja || e.name) : (e.name_en || e.name)} (${formatYear(e.year, language)})`}
                                                    onClick={() => {
                                                        setYear(e.year);
                                                        setSelectedEvent(e);
                                                        if (map.current) map.current.flyTo({ center: [e.lon, e.lat], zoom: 6 });
                                                    }}
                                                />
                                            );
                                        })}
                                        {/* Current year indicator line */}
                                        <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                    </div>
                                </div>
                            );
                        });

                        // Migration paths row
                        const migrationRow = migrationDots.length > 0 ? (
                            <div key="migration-paths" className="era-row visible" style={{ minHeight: '18px' }}>
                                <div className="era-label" style={{ color: '#44ff44' }}>
                                    {language === 'ja' ? '移動ルート' : 'Migration Routes'}
                                </div>
                                <div className="era-name-display"></div>
                                <div className="timeline-marker-track">
                                    {migrationDots.map(m => (
                                        <div
                                            key={m.id}
                                            className="timeline-marker-dot"
                                            style={{
                                                left: `${m.pos}%`,
                                                backgroundColor: '#ffcc00',
                                                borderColor: year >= m.year ? '#fff' : '#ffcc00',
                                                width: '6px',
                                                height: '6px',
                                            }}
                                            title={`${m.name} (${formatYear(m.year, language)})`}
                                            onClick={() => setYear(m.year)}
                                        />
                                    ))}
                                    <div className="timeline-cursor" style={{ left: `${getPos(year)}%` }} />
                                </div>
                            </div>
                        ) : null;

                        return [...eventElements, migrationRow];
                    })()}

                    <div className="controls">
                        <div className="year-display">
                            {formatYear(year, language)}
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
        </div >
    )
}

export default App
