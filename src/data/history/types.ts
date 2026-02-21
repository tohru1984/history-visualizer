export interface HumanEvent {
    id: string;
    name: string;
    name_en?: string;
    name_ja?: string;
    year: number;
    year_end?: number;
    lat: number;
    lon: number;
    description: string;
    description_en?: string;
    description_ja?: string;
    type: 'evolution' | 'migration' | 'civilization' | 'modern' | 'ww2' | 'war' | 'megafauna' | 'hominin' | 'era';
    importance?: number; // 1 to 5 (5 is most important)
    imageUrl?: string;
    sourceUrl?: string;
}
