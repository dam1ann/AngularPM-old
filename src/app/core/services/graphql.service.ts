import {Apollo} from 'apollo-angular';
import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';
import {ApolloQueryResult} from 'apollo-client';
import {map} from 'rxjs/operators';
import Destination from '../models/destination.interface';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {

    constructor(private apollo: Apollo) {
    }

    getHotels(): Observable<ApolloQueryResult<any>> {
        return this.apollo.watchQuery<any>({
            query: gql`{
                hotels {
                    status
                    updatedAt
                    createdAt
                    id
                    name
                    rooms
                    amenities
                    phone
                    website
                    photos {
                        status
                        updatedAt
                        createdAt
                        id
                        handle
                        fileName
                        height
                        width
                        size
                        mimeType
                        attribution
                    }
                    destinations {
                        id
                    }
                    reviews {
                        id
                    }
                }
            }`
        }).valueChanges;
    }

    getDestinations(): Observable<Array<Destination>> {
        return this.apollo.watchQuery<any>({
            query: gql`  {destinations {
                updatedAt
                createdAt
                id
                name
                location
                image {
                    status
                    updatedAt
                    createdAt
                    id
                    handle
                    fileName
                    height
                    width
                    size
                    mimeType
                    attribution
                }
                description
                hotels {
                    id
                }
            }

            }`
        })
        .valueChanges
        .pipe(
            map(({data: {destinations}}) => destinations)
        );
    }

    getOneDestination(id: string): Observable<any> {
        console.log(id);
        return this.apollo.watchQuery<any>({
            query: gql`query ($id: ID) {
                destination(where: {id: $id}) {
                    status
                    updatedAt
                    createdAt
                    id
                    name
                    location
                    image {
                        status
                        updatedAt
                        createdAt
                        id
                        handle
                        fileName
                        height
                        width
                        size
                        mimeType
                        attribution
                    }
                    description
                    hotels {
                        status
                        updatedAt
                        createdAt
                        id
                        name
                        rooms
                        amenities
                        phone
                        website
                        photos {
                            status
                            updatedAt
                            createdAt
                            id
                            handle
                            fileName
                            height
                            width
                            size
                            mimeType
                            attribution
                        }
                    }
                }
            }`,
            variables: {id}
        }).valueChanges;
    }

    getOneHotel(id: string): Observable<any> {
        return this.apollo.watchQuery({
            query: gql`query ($id: ID) {
                hotel(where: {id: $id}) {
                    status
                    updatedAt
                    createdAt
                    id
                    name
                    description
                    rooms
                    amenities
                    phone
                    website
                    photos {
                        status
                        updatedAt
                        createdAt
                        id
                        handle
                        fileName
                        height
                        width
                        size
                        mimeType
                        attribution
                    }
                    destinations {
                        id
                    }
                    reviews {
                        id
                    }
                }
            }
            `,
            variables: {id}
        }).valueChanges;
    }
}
