import {Hotel} from './index';

export default interface Review {
    status;
    updatedAt;
    createdAt;
    id: string;
    attribution?: string;
    content?: object;
    hotel?: Hotel;
}
