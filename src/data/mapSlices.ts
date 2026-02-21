export interface MapSlice {
    year: number;
    imageUrl: string;
}

export const mapSlices: MapSlice[] = [
    { year: -10000000, imageUrl: '/paleomap/10m.png' },
    { year: -5000000, imageUrl: '/paleomap/5m.png' },
    { year: -2000000, imageUrl: '/paleomap/2m.png' },
    { year: -500000, imageUrl: '/paleomap/500k.png' },
    { year: 0, imageUrl: '/paleomap/present.png' }
];
