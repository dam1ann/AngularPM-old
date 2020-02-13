import Image from './image.interface';
import Hotel from './hotel.interface';

export default interface Destination {
    id: string;
    name: string;
    status;
    updatedAt;
    createdAt;
    location?: string;
    image?: Image;
    description?;
    hotels?: Array<Hotel>;
}
