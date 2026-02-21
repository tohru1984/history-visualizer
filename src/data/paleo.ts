export const iceSheetGeoJSON: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { name: 'Laurentid Ice Sheet', peak_year: -21000 },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-130, 50], [-120, 48], [-110, 48], [-100, 45], [-90, 42], [-80, 40], [-70, 42], [-60, 45], [-50, 50],
                    [-50, 80], [-130, 80], [-130, 50]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { name: 'Fennoscandian Ice Sheet', peak_year: -21000 },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-10, 55], [0, 53], [10, 52], [20, 52], [30, 55], [40, 60], [50, 65], [60, 65],
                    [60, 85], [-10, 85], [-10, 55]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { name: 'Antarctic Ice Sheet (LGM)', peak_year: -21000 },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [-180, -60], [180, -60], [180, -90], [-180, -90], [-180, -60]
                ]]
            }
        }
    ]
};

export const exposedLandGeoJSON: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            properties: { name: 'Beringia' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [160, 60], [180, 55], [-160, 55], [-150, 65], [-170, 75], [170, 75], [160, 60]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { name: 'Japan Land Bridges' },
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    // Northern: Sakhalin-Hokkaido-Honshu
                    [[
                        [140, 55], [144, 55], [146, 45], [142, 40], [140, 45], [140, 55]
                    ]],
                    // Western: Korea-Kyushu
                    [[
                        [125, 38], [132, 38], [132, 32], [125, 32], [125, 38]
                    ]]
                ]
            }
        },
        {
            type: 'Feature',
            properties: { name: 'Sundaland' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [95, 15], [120, 15], [125, 5], [125, -10], [90, -10], [95, 15]
                ]]
            }
        },
        {
            type: 'Feature',
            properties: { name: 'Sahul' },
            geometry: {
                type: 'Polygon',
                coordinates: [[
                    [120, -10], [155, -10], [155, -45], [120, -45], [120, -10]
                ]]
            }
        }
    ]
};
