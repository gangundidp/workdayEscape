export interface Place {
    name: string;
    area: string;
    price: number;
    tags: string[];
    crowd: 'low' | 'medium' | 'high';
    rating: number;
    image: string;
    distance: number;
}