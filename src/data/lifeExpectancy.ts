export interface LifeExpectancyPoint {
    year: number;
    age: number;
}

// Anthropological and historical estimates of life expectancy at birth
export const LIFE_EXPECTANCY_DATA: LifeExpectancyPoint[] = [
    { year: -10000000, age: 15 }, // Early hominids
    { year: -4000000, age: 18 },  // Australopithecus
    { year: -2000000, age: 22 },  // Homo erectus
    { year: -300000, age: 25 },   // Early Sapiens
    { year: -100000, age: 28 },   // Great Journey era
    { year: -10000, age: 30 },    // Pre-agriculture peak
    { year: -8000, age: 20 },     // Agriculture dip (disease/malnutrition)
    { year: -3000, age: 25 },     // Bronze Age
    { year: 0, age: 28 },         // Roman Era
    { year: 1000, age: 30 },      // Medieval
    { year: 1500, age: 33 },      // Renaissance
    { year: 1800, age: 35 },      // Pre-industrial
    { year: 1900, age: 45 },      // 20th century start
    { year: 1950, age: 48 },      // Post-war
    { year: 1970, age: 58 },
    { year: 2000, age: 67 },
    { year: 2023, age: 73 },      // World Average
    { year: 2026, age: 75 }
];

export const getLifeExpectancy = (year: number): number => {
    if (year <= LIFE_EXPECTANCY_DATA[0].year) return LIFE_EXPECTANCY_DATA[0].age;
    if (year >= LIFE_EXPECTANCY_DATA[LIFE_EXPECTANCY_DATA.length - 1].year) return LIFE_EXPECTANCY_DATA[LIFE_EXPECTANCY_DATA.length - 1].age;

    for (let i = 0; i < LIFE_EXPECTANCY_DATA.length - 1; i++) {
        const p1 = LIFE_EXPECTANCY_DATA[i];
        const p2 = LIFE_EXPECTANCY_DATA[i + 1];

        if (year >= p1.year && year <= p2.year) {
            // Linear interpolation
            const t = (year - p1.year) / (p2.year - p1.year);
            return Math.round(p1.age + t * (p2.age - p1.age));
        }
    }
    return 30;
};
