import {Component, OnInit} from '@angular/core';
import {ArticlesService} from '../core/services/articles.service';
import {ArticleInterface} from '../core/models/article.interface';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    articles: Array<ArticleInterface>;

    constructor(private articlesService: ArticlesService) {
    }

    ngOnInit() {
        this.articlesService.getArticles()
            .subscribe(articles => {
                this.articles = articles;
            });
    }

}
