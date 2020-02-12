import {Apollo} from 'apollo-angular';
import {Injectable} from '@angular/core';
import gql from 'graphql-tag';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GraphqlService {

    constructor(private apollo: Apollo) {
    }

    getHotels(): Observable<any> {
        return this.apollo.query({
            query: gql`{
                destinations {
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
                        id
                    }
                }
            }`
        });
    }


    getDestinations(): Observable<any> {
        return this.apollo.query({
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
        });
    }
}
