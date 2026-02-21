export interface HistoricalEra {
    id: string;
    name: string;
    start: number;
    end: number;
    color: string;
}

export const JAPAN_ERAS: HistoricalEra[] = [
    { id: 'jp_paleolithic', name: '旧石器時代', start: -40000, end: -14000, color: '#888' },
    { id: 'jp_jomon', name: '縄文時代', start: -14000, end: -1000, color: '#4caf50' },
    { id: 'jp_yayoi', name: '弥生時代', start: -1000, end: 250, color: '#ff9800' },
    { id: 'jp_kofun', name: '古墳時代', start: 250, end: 538, color: '#e91e63' },
    { id: 'jp_asuka', name: '飛鳥時代', start: 538, end: 710, color: '#9c27b0' },
    { id: 'jp_nara', name: '奈良時代', start: 710, end: 794, color: '#3f51b5' },
    { id: 'jp_heian', name: '平安時代', start: 794, end: 1185, color: '#03a9f4' },
    { id: 'jp_kamakura', name: '鎌倉時代', start: 1185, end: 1333, color: '#00bcd4' },
    { id: 'jp_muromachi', name: '室町時代', start: 1336, end: 1573, color: '#009688' },
    { id: 'jp_sengoku', name: '戦国時代', start: 1467, end: 1603, color: '#f44336' },
    { id: 'jp_edo', name: '江戸時代', start: 1603, end: 1868.811, color: '#fbc02d' },
    { id: 'jp_meiji', name: '明治', start: 1868.811, end: 1912.58, color: '#ff5722' },
    { id: 'jp_taisho', name: '大正', start: 1912.58, end: 1926.98, color: '#795548' },
    { id: 'jp_showa', name: '昭和', start: 1926.98, end: 1989.02, color: '#607d8b' },
    { id: 'jp_heisei', name: '平成', start: 1989.02, end: 2019.33, color: '#00d4ff' },
    { id: 'jp_reiwa', name: '令和', start: 2019.33, end: 2026, color: '#ff00ff' }
];

export const CHINA_ERAS: HistoricalEra[] = [
    { id: 'cn_xia', name: '夏', start: -2070, end: -1600, color: '#795548' },
    { id: 'cn_shang', name: '殷 (商)', start: -1600, end: -1046, color: '#ff5722' },
    { id: 'cn_zhou', name: '周', start: -1046, end: -256, color: '#ffeb3b' },
    { id: 'cn_qin', name: '秦', start: -221, end: -206, color: '#000000' },
    { id: 'cn_han', name: '漢', start: -206, end: 220, color: '#f44336' },
    { id: 'cn_three_kingdoms', name: '三国時代', start: 220, end: 280, color: '#4caf50' },
    { id: 'cn_jin', name: '晋', start: 265, end: 420, color: '#2196f3' },
    { id: 'cn_north_south', name: '南北朝', start: 420, end: 589, color: '#9c27b0' },
    { id: 'cn_sui', name: '隋', start: 581, end: 618, color: '#3f51b5' },
    { id: 'cn_tang', name: '唐', start: 618, end: 907, color: '#ffc107' },
    { id: 'cn_five_dynasties', name: '五代十国', start: 907, end: 960, color: '#607d8b' },
    { id: 'cn_song', name: '宋', start: 960, end: 1279, color: '#8bc34a' },
    { id: 'cn_yuan', name: '元', start: 1271, end: 1368, color: '#00bcd4' },
    { id: 'cn_ming', name: '明', start: 1368, end: 1644, color: '#e91e63' },
    { id: 'cn_qing', name: '清', start: 1644, end: 1912, color: '#ffc107' },
    { id: 'cn_roc', name: '中華民国', start: 1912, end: 1949, color: '#3f51b5' },
    { id: 'cn_prc', name: '中華人民共和国', start: 1949, end: 2026, color: '#f44336' }
];

export const WORLD_ERAS: HistoricalEra[] = [
    { id: 'w_prehistoric', name: '先史時代', start: -10000000, end: -3500, color: '#555' },
    { id: 'w_ancient', name: '古代文明', start: -3500, end: 500, color: '#ff5722' },
    { id: 'w_medieval', name: '中世', start: 500, end: 1450, color: '#795548' },
    { id: 'w_renaissance', name: 'ルネサンス・大航海時代', start: 1450, end: 1750, color: '#ffeb3b' },
    { id: 'w_industrial', name: '産業革命・近代', start: 1750, end: 1945, color: '#cddc39' },
    { id: 'w_contemporary', name: '現代', start: 1945, end: 2026, color: '#00d4ff' }
];
