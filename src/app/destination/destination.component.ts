import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {GraphqlService} from '../core/services/graphql.service';
import {map, mergeMap} from 'rxjs/operators';
import {Destination} from '../core/models';

@Component({
    selector: 'app-destination',
    templateUrl: './destination.component.html',
    styleUrls: ['./destination.component.scss']
})
export class DestinationComponent implements OnInit, OnDestroy {

    destination$: Observable<Destination>;

    constructor(private route: ActivatedRoute,
                private graphqlService: GraphqlService) {
    }

    ngOnInit(): void {
        this.destination$ = this.route.params.pipe(
            mergeMap(params => this.graphqlService.getOneDestination(params.id)),
            map(data => data.data.destination)
        );
    }

    ngOnDestroy(): void {
    }

}
