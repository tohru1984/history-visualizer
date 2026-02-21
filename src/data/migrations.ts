export interface MigrationPath {
    id: string;
    name: string;
    year_start: number;
    year_end: number;
    coordinates: [number, number][]; // [lon, lat]
}

export const migrationPaths: MigrationPath[] = [
    {
        id: 'out_of_africa',
        name: '出アフリカ・ルート',
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
        id: 'japan_northern',
        name: '日本への道 (北方ルート)',
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
        year_start: -40000,
        year_end: -30000,
        coordinates: [
            [121, 23], // Taiwan
            [125, 26], // Ryukyu Islands
            [130, 32]  // Southern Kyushu
        ]
    }
];
