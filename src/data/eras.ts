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

export const USA_ERAS: HistoricalEra[] = [
    { id: 'us_colonial', name: '植民地時代', start: 1607, end: 1776, color: '#795548' },
    { id: 'us_independence', name: '独立・建国', start: 1776, end: 1789, color: '#3f51b5' },
    { id: 'us_early_republic', name: '初期共和国', start: 1789, end: 1861, color: '#4caf50' },
    { id: 'us_civil_war', name: '南北戦争', start: 1861, end: 1865, color: '#f44336' },
    { id: 'us_gilded_age', name: '金ぴか時代', start: 1865, end: 1898, color: '#ffc107' },
    { id: 'us_progressive', name: '革新主義時代', start: 1898, end: 1920, color: '#ff9800' },
    { id: 'us_roaring20s', name: '狂騒の20年代', start: 1920, end: 1929, color: '#e91e63' },
    { id: 'us_depression', name: '大恐慌', start: 1929, end: 1941, color: '#607d8b' },
    { id: 'us_ww2', name: '第二次世界大戦', start: 1941, end: 1945, color: '#f44336' },
    { id: 'us_cold_war', name: '冷戦時代', start: 1945, end: 1991, color: '#2196f3' },
    { id: 'us_modern', name: '現代', start: 1991, end: 2026, color: '#00d4ff' }
];

export const UK_ERAS: HistoricalEra[] = [
    { id: 'uk_anglo_saxon', name: 'アングロ・サクソン', start: 450, end: 1066, color: '#795548' },
    { id: 'uk_norman', name: 'ノルマン朝', start: 1066, end: 1154, color: '#ff5722' },
    { id: 'uk_plantagenet', name: 'プランタジネット朝', start: 1154, end: 1485, color: '#4caf50' },
    { id: 'uk_tudor', name: 'テューダー朝', start: 1485, end: 1603, color: '#9c27b0' },
    { id: 'uk_stuart', name: 'ステュアート朝', start: 1603, end: 1714, color: '#3f51b5' },
    { id: 'uk_hanoverian', name: 'ハノーヴァー朝', start: 1714, end: 1901, color: '#ffc107' },
    { id: 'uk_edwardian', name: 'エドワード朝', start: 1901, end: 1910, color: '#ff9800' },
    { id: 'uk_windsor', name: 'ウィンザー朝', start: 1910, end: 2026, color: '#00d4ff' }
];

export const FRANCE_ERAS: HistoricalEra[] = [
    { id: 'fr_merovingian', name: 'メロヴィング朝', start: 481, end: 751, color: '#795548' },
    { id: 'fr_carolingian', name: 'カロリング朝', start: 751, end: 987, color: '#ff5722' },
    { id: 'fr_capetian', name: 'カペー朝', start: 987, end: 1328, color: '#3f51b5' },
    { id: 'fr_valois', name: 'ヴァロワ朝', start: 1328, end: 1589, color: '#9c27b0' },
    { id: 'fr_bourbon', name: 'ブルボン朝', start: 1589, end: 1792, color: '#ffc107' },
    { id: 'fr_revolution', name: 'フランス革命', start: 1789, end: 1804, color: '#f44336' },
    { id: 'fr_napoleon', name: 'ナポレオン帝政', start: 1804, end: 1815, color: '#ff9800' },
    { id: 'fr_restoration', name: '王政復古・七月王政', start: 1815, end: 1848, color: '#607d8b' },
    { id: 'fr_second_republic', name: '第二共和政', start: 1848, end: 1852, color: '#4caf50' },
    { id: 'fr_second_empire', name: '第二帝政', start: 1852, end: 1870, color: '#e91e63' },
    { id: 'fr_third_republic', name: '第三共和政', start: 1870, end: 1940, color: '#2196f3' },
    { id: 'fr_fifth_republic', name: '第五共和政', start: 1958, end: 2026, color: '#00d4ff' }
];

export const GERMANY_ERAS: HistoricalEra[] = [
    { id: 'de_hre', name: '神聖ローマ帝国', start: 800, end: 1806, color: '#ffc107' },
    { id: 'de_confederation', name: 'ドイツ連邦', start: 1815, end: 1871, color: '#795548' },
    { id: 'de_empire', name: 'ドイツ帝国', start: 1871, end: 1918, color: '#ff5722' },
    { id: 'de_weimar', name: 'ヴァイマル共和政', start: 1918, end: 1933, color: '#3f51b5' },
    { id: 'de_nazi', name: 'ナチス・ドイツ', start: 1933, end: 1945, color: '#f44336' },
    { id: 'de_divided', name: '東西分裂', start: 1949, end: 1990, color: '#607d8b' },
    { id: 'de_reunified', name: '再統一ドイツ', start: 1990, end: 2026, color: '#00d4ff' }
];
