import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ArticlesService} from '../core/services/articles.service';
import {ArticleInterface} from '../core/models/article.interface';
import {GraphqlService} from '../core/services/graphql.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {


    destinations: Array<any>;


    constructor(private articlesService: ArticlesService,
                private graph: GraphqlService) {
    }

    ngOnInit() {
        this.graph
            .getDestinations()
            .subscribe(({data}) => {
                console.log(data.destinations);
                this.destinations = data.destiations;
            });
    }

    ngOnDestroy(): void {
    }
}
