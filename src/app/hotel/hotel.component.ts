import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import Hotel from '../core/models/hotel.interface';
import {GraphqlService} from '../core/services/graphql.service';
import {ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';

@Component({
    selector: 'app-hotel',
    templateUrl: './hotel.component.html',
    styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

    hotels$: Observable<Hotel>;

    constructor(private route: ActivatedRoute,
                private graphqlService: GraphqlService) {
    }

    ngOnInit(): void {
        this.hotels$ = this.route.params.pipe(
            mergeMap(params => this.graphqlService.getOneHotel(params.id)),
            map(data => data.data.hotel),
            tap(data =>{
                console.log(data);
            })
        );
    }

}
