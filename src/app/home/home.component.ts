import {Component, OnDestroy, OnInit} from '@angular/core';
import {GraphqlService} from '../core/services/graphql.service';
import {Observable} from 'rxjs';
import Destination from '../core/models/destination.interface';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

    destinations$: Observable<Array<Destination>>;

    constructor(private graphService: GraphqlService) {
    }

    ngOnInit(): void {
        this.destinations$ = this.graphService.getDestinations();
    }

    ngOnDestroy(): void {
    }
}
