import {Destination, Image} from './index';

export default interface Hotel {
    status;
    updatedAt;
    createdAt;
    id: string;
    name: string;
    description?: string;
    rooms?: number;
    amenities: Array<string>;
    phone?: string;
    website?: string;
    photos: Array<Image>;
    destinations?: Array<Destination>;
    reviews?: Array<Destination>;
}
