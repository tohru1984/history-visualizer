export interface PopulationPoint {
    year: number;
    world: number; // In persons
    japan?: number; // In persons
}

// Data source: Mix of UN, World Bank, and historical estimates (Maddison Project, etc.)
export const POPULATION_DATA: PopulationPoint[] = [
    { year: -10000000, world: 10000 },
    { year: -2000000, world: 100000 },
    { year: -300000, world: 500000 },
    { year: -74000, world: 10000 }, // Toba catastrophe bottleneck
    { year: -50000, world: 2000000 },
    { year: -10000, world: 5000000, japan: 20000 },
    { year: -5000, world: 20000000, japan: 100000 },
    { year: -3000, world: 45000000, japan: 200000 },
    { year: -1000, world: 100000000, japan: 600000 },
    { year: 1, world: 200000000, japan: 1000000 },
    { year: 600, world: 210000000, japan: 4500000 },
    { year: 1000, world: 280000000, japan: 7000000 },
    { year: 1200, world: 400000000, japan: 10000000 },
    { year: 1400, world: 350000000, japan: 12000000 }, // Black death dip
    { year: 1600, world: 550000000, japan: 15000000 },
    { year: 1700, world: 640000000, japan: 28000000 },
    { year: 1800, world: 950000000, japan: 30000000 },
    { year: 1868, world: 1300000000, japan: 33300000 },
    { year: 1900, world: 1650000000, japan: 44000000 },
    { year: 1945, world: 2350000000, japan: 72000000 },
    { year: 1964, world: 3260000000, japan: 97000000 },
    { year: 1989, world: 5200000000, japan: 123000000 },
    { year: 2011, world: 7000000000, japan: 128000000 },
    { year: 2024, world: 8100000000, japan: 124000000 },
    { year: 2100, world: 10000000000, japan: 70000000 }
];

export const getPopulation = (year: number) => {
    if (year <= POPULATION_DATA[0].year) return { world: POPULATION_DATA[0].world, japan: 0 };
    if (year >= POPULATION_DATA[POPULATION_DATA.length - 1].year) {
        const last = POPULATION_DATA[POPULATION_DATA.length - 1];
        return { world: last.world, japan: last.japan || 0 };
    }

    for (let i = 0; i < POPULATION_DATA.length - 1; i++) {
        const p1 = POPULATION_DATA[i];
        const p2 = POPULATION_DATA[i + 1];

        if (year >= p1.year && year <= p2.year) {
            const t = (year - p1.year) / (p2.year - p1.year);
            const world = Math.round(p1.world + t * (p2.world - p1.world));

            let japan = 0;
            if (p1.japan !== undefined && p2.japan !== undefined) {
                japan = Math.round(p1.japan + t * (p2.japan - p1.japan));
            } else if (p2.japan !== undefined) {
                // If japan only exists in p2, interpolate from 0
                japan = Math.round(t * p2.japan);
            }

            return { world, japan };
        }
    }
    return { world: 0, japan: 0 };
};

export const formatPopulation = (num: number): string => {
    if (num >= 100000000) {
        return (num / 100000000).toFixed(2) + ' 億';
    }
    if (num >= 10000) {
        return (num / 10000).toFixed(1) + ' 万';
    }
    return num.toLocaleString();
};
