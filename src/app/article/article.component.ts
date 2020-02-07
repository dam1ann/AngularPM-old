import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ArticleInterface} from '../core/models/article.interface';
import {ArticlesService} from '../core/services/articles.service';
import {CommentInterface} from '../core/models/comment.interface';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    article: ArticleInterface;
    comments: Array<CommentInterface>;

    constructor(private route: ActivatedRoute,
                private articlesService: ArticlesService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {

            this.articlesService.getArticle(Number(params.id)).subscribe(article => {
                this.article = article;
            });

            this.articlesService.getComments((Number(params.id))).subscribe(comments => {
                this.comments = comments;
            });
        });
    }

}
