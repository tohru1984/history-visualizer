export interface HumanEvent {
    id: string;
    name: string;
    year: number;
    year_end?: number;
    lat: number;
    lon: number;
    description: string;
    type: 'evolution' | 'migration' | 'civilization' | 'modern' | 'war' | 'megafauna' | 'hominin';
    imageUrl?: string;
    sourceUrl?: string;
}
