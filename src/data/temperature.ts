export interface TempPoint {
    year: number;
    temp: number; // Global average temperature in Celsius
}

/**
 * Historical temperature data based on paleoclimatology estimates:
 * - Current (2024): ~15.0°C (Pre-industrial ~14.0°C)
 * - Little Ice Age: -0.5 to -1.0°C drop
 * - Medieval Warm Period: +0.5°C rise
 * - Holocene Optimum: ~15.5°C
 * - Last Glacial Maximum (20kya): ~9°C
 * - Eemian Interglacial (125kya): ~16°C
 * - Pliocene: Higher
 * - Miocene: Even higher
 */
export const TEMPERATURE_DATA: TempPoint[] = [
    { year: -10000000, temp: 18 }, // Miocene/Pliocene transition
    { year: -5000000, temp: 17 },
    { year: -2000000, temp: 16 },
    { year: -1000000, temp: 15 },
    { year: -300000, temp: 14.5 },
    { year: -125000, temp: 16 },   // Eemian Interglacial
    { year: -74000, temp: 11 },   // Toba Post-eruption dip
    { year: -50000, temp: 13 },
    { year: -21000, temp: 9 },    // Last Glacial Maximum
    { year: -10000, temp: 14 },   // Holocene Start
    { year: -6000, temp: 15.5 },  // Holocene Climate Optimum
    { year: -1000, temp: 14.8 },
    { year: 1, temp: 14.5 },
    { year: 1100, temp: 15 },     // Medieval Warm Period
    { year: 1700, temp: 13.8 },   // Little Ice Age
    { year: 1850, temp: 14.0 },   // Pre-industrial baseline
    { year: 2024, temp: 15.2 },   // Global Warming
    { year: 2100, temp: 17.5 }    // Future Projection (RCP 8.5 mid-range)
];

export const getTemperature = (year: number): number => {
    if (year <= TEMPERATURE_DATA[0].year) return TEMPERATURE_DATA[0].temp;
    if (year >= TEMPERATURE_DATA[TEMPERATURE_DATA.length - 1].year) return TEMPERATURE_DATA[TEMPERATURE_DATA.length - 1].temp;

    for (let i = 0; i < TEMPERATURE_DATA.length - 1; i++) {
        const p1 = TEMPERATURE_DATA[i];
        const p2 = TEMPERATURE_DATA[i + 1];
        if (year >= p1.year && year <= p2.year) {
            const t = (year - p1.year) / (p2.year - p1.year);
            return Number((p1.temp + t * (p2.temp - p1.temp)).toFixed(1));
        }
    }
    return 15;
};
