export interface MigrationPath {
    id: string;
    name: string;
    name_en?: string;
    name_ja?: string;
    year_start: number;
    year_end: number;
    coordinates: [number, number][]; // [lon, lat]
}

export const migrationPaths: MigrationPath[] = [
    {
        id: 'out_of_africa',
        name: '出アフリカ・ルート',
        name_ja: '出アフリカ・ルート',
        name_en: 'Out of Africa',
        year_start: -70000,
        year_end: -50000,
        coordinates: [
            [38, 9],   // Ethiopia
            [43, 12],  // Bab-el-Mandeb
            [50, 20],  // Arabian Peninsula
            [60, 25]   // Towards South Asia
        ]
    },
    {
        id: 'coastal_route',
        name: '南海岸ルート (アジア)',
        name_ja: '南海岸ルート (アジア)',
        name_en: 'Southern Coastal Route',
        year_start: -65000,
        year_end: -45000,
        coordinates: [
            [60, 25],  // Iran/Pakistan coast
            [75, 15],  // India
            [95, 15],  // SE Asia
            [110, 0],  // Sundaland
            [130, -20] // Sahul (Australia)
        ]
    },
    {
        id: 'european_entry',
        name: 'ヨーロッパ進出ル―ト',
        name_ja: 'ヨーロッパ進出ル―ト',
        name_en: 'Route to Europe',
        year_start: -45000,
        year_end: -30000,
        coordinates: [
            [45, 30],  // Levant/Turkey
            [30, 40],  // Balkans
            [15, 48],  // Central Europe
            [0, 45]    // Western Europe
        ]
    },
    {
        id: 'siberian_expansion',
        name: 'シベリア拡散ルート',
        name_ja: 'シベリア拡散ルート',
        name_en: 'Siberian Expansion',
        year_start: -30000,
        year_end: -15000,
        coordinates: [
            [100, 50], // Lake Baikal
            [130, 60], // NE Siberia
            [170, 65]  // Beringia
        ]
    },
    {
        id: 'american_entry',
        name: 'アメリカ大陸進出ルート',
        name_ja: 'アメリカ大陸進出ルート',
        name_en: 'Entry to Americas',
        year_start: -15000,
        year_end: -10000,
        coordinates: [
            [170, 65],   // Beringia
            [-150, 60],  // Alaska
            [-120, 40],  // North America
            [-100, 20],  // Central America
            [-70, -10],  // South America (Andes)
            [-50, -40]   // Southern Chile
        ]
    },
    {
        id: 'austronesian_expansion',
        name: 'オーストロネシア海路拡大',
        name_ja: 'オーストロネシア海路拡大',
        name_en: 'Austronesian Expansion',
        year_start: -4000,
        year_end: 1000,
        coordinates: [
            [121, 23],  // Taiwan (Origin)
            [121, 15],  // Philippines
            [115, -4],  // Borneo/Indonesia
            [47, -18],  // Madagascar (around 500 AD)
            [178, -18], // Fiji
            [-155, 19], // Hawaii
            [-109, -27], // Easter Island
            [174, -41]  // New Zealand (around 1200 AD)
        ]
    },
    {
        id: 'uralic_migration',
        name: 'ウラル系民族の移動',
        name_ja: 'ウラル系民族の移動',
        name_en: 'Uralic Migrations',
        year_start: -6000,
        year_end: -1000,
        coordinates: [
            [120, 43], // Liao River (Origin)
            [100, 60], // Siberia
            [60, 60],  // Urals
            [30, 60]   // Eastern Europe / Finland
        ]
    },
    {
        id: 'indo_european_migration',
        name: 'インド・ヨーロッパ語族の拡散',
        name_ja: 'インド・ヨーロッパ語族の拡散',
        name_en: 'Indo-European Expansion',
        year_start: -4500,
        year_end: -1000,
        coordinates: [
            [45, 48],  // Pontic Steppe (Caspian/Black Sea)
            [25, 50],  // Central Europe
            [10, 50],  // Western Europe
            [45, 48],  // Back to start? No, branch
            [60, 40],  // Iran
            [75, 25]   // Northern India
        ]
    },
    {
        id: 'japan_northern',
        name: '日本への道 (北方ルート)',
        name_ja: '日本への道 (北方ルート)',
        name_en: 'Route to Japan (North)',
        year_start: -30000,
        year_end: -15000,
        coordinates: [
            [140, 50], // Sakhalin
            [142, 43], // Hokkaido
            [141, 40]  // Northern Honshu
        ]
    },
    {
        id: 'japan_peninsula',
        name: '日本への道 (朝鮮半島ルート)',
        name_ja: '日本への道 (朝鮮半島ルート)',
        name_en: 'Route to Japan (Peninsula)',
        year_start: -38000,
        year_end: -25000,
        coordinates: [
            [126, 37], // Korea
            [130, 34], // Tsushima/Kyushu
            [135, 35]  // Western Honshu
        ]
    },
    {
        id: 'japan_southern',
        name: '日本への道 (南方海路ルート)',
        name_ja: '日本への道 (南方海路ルート)',
        name_en: 'Route to Japan (South)',
        year_start: -40000,
        year_end: -30000,
        coordinates: [
            [121, 23], // Taiwan
            [125, 26], // Ryukyu Islands
            [130, 32]  // Southern Kyushu
        ]
    }
];
