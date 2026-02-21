export interface HumanEvent {
    id: string;
    name: string;
    year: number;
    year_end?: number;
    lat: number;
    lon: number;
    description: string;
    type: 'evolution' | 'migration' | 'civilization' | 'modern' | 'war' | 'megafauna' | 'hominin';
    importance?: number; // 1 to 5 (5 is most important)
    imageUrl?: string;
    sourceUrl?: string;
}
