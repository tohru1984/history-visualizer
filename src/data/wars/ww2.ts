export const WW2_FACTIONS: any = {
    type: 'FeatureCollection',
    features: [
        // Axis
        {
            type: 'Feature',
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    // Germany & Central/Western Occupied Europe (Simplified)
                    [[[6, 47], [15, 47], [21, 52], [23, 55], [5, 55], [6, 47]]],
                    // Italy (Simplified)
                    [[[8, 45], [18, 45], [18, 37], [8, 37], [8, 45]]],
                    // Japan Empire (Vast area, simplified box for visual impact in early/mid war)
                    [[[105, 5], [160, 5], [160, 53], [105, 53], [105, 5]]]
                ]
            },
            properties: { faction: 'axis', color: '#ff4444', name: 'Axis' }
        },
        // Allies
        {
            type: 'Feature',
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    // UK
                    [[[-10, 50], [2, 50], [2, 60], [-10, 60], [-10, 50]]],
                    // USA (Simplified)
                    [[[-125, 25], [-65, 25], [-65, 50], [-125, 50], [-125, 25]]],
                    // USSR (Simplified Western Front to Urals)
                    [[[30, 40], [60, 40], [60, 75], [30, 75], [30, 40]]],
                    // China (Free China area, simplified)
                    [[[95, 22], [120, 22], [120, 38], [95, 38], [95, 22]]]
                ]
            },
            properties: { faction: 'allies', color: '#4444ff', name: 'Allies' }
        },
        // Neutrals / Other (Optional visibility)
        {
            type: 'Feature',
            geometry: {
                type: 'MultiPolygon',
                coordinates: [
                    // Vichy France / North Africa (Simplified)
                    [[[-10, 30], [20, 30], [20, 42], [-10, 42], [-10, 30]]]
                ]
            },
            properties: { faction: 'neutral', color: '#aaaaaa', name: 'Other' }
        }
    ]
};

export const WW2_MOVEMENTS: any = {
    type: 'FeatureCollection',
    features: [
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[10, 52], [18, 52]] },
            properties: { name: 'Blitzkrieg (Poland)', year: 1939.67 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[1, 51], [6, 51], [6, 48]] }, // Thru Low Countries to France
            properties: { name: 'Fall of France', year: 1940.35 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[20, 48], [25, 38]] }, // Balkans
            properties: { name: 'Balkan Campaign', year: 1941.25 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[20, 52], [37, 55]] },
            properties: { name: 'Operation Barbarossa', year: 1941.47 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[140, 35], [-157, 21]] }, // From Japan to Hawaii
            properties: { name: 'Pearl Harbor', year: 1941.92 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[140, 35], [110, 15], [105, -5]] }, // To SE Asia
            properties: { name: 'Southern Expansion', year: 1941.95 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[-170, 25], [-182, 28]] }, // Near Midway
            properties: { name: 'Battle of Midway', year: 1942.42 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[28, 31], [25, 31]] }, // Egypt
            properties: { name: 'El Alamein', year: 1942.85 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[40, 50], [44, 48]] }, // To Stalingrad
            properties: { name: 'Battle of Stalingrad', year: 1942.92 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[14, 37], [15, 41]] }, // Up Italy
            properties: { name: 'Italian Campaign', year: 1943.58 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[-1, 50.5], [-0.5, 49.3]] }, // English Channel
            properties: { name: 'D-Day', year: 1944.42 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[-130, 15], [-140, 26], [145, 18], [127, 30]] }, // Pacific hopping
            properties: { name: 'Island Hopping', year: 1944.8 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[127, 26], [130, 32]] }, // To Okinawa
            properties: { name: 'Okinawa Campaign', year: 1945.25 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[6, 49], [13, 52]] }, // To Berlin
            properties: { name: 'Push to Berlin (West)', year: 1945.33 }
        },
        {
            type: 'Feature',
            geometry: { type: 'LineString', coordinates: [[21, 52], [13, 52]] }, // To Berlin
            properties: { name: 'Push to Berlin (East)', year: 1945.35 }
        }
    ]
};
