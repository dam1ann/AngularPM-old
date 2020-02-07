import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {Observable} from 'rxjs';
import {ArticleInterface} from '../models/article.interface';
import {CommentInterface} from '../models/comment.interface';

@Injectable({
    providedIn: 'root'
})
export class ArticlesService {

    constructor(private api: ApiService) {
    }

    getArticle(id: number): Observable<ArticleInterface> {
        return this.api.get(`/posts/${id}`);
    }

    getArticles(): Observable<Array<ArticleInterface>> {
        return this.api.get(`/posts`);
    }

    getComments(articleId: number): Observable<Array<CommentInterface>> {
        return this.api.get(`/posts/${articleId}/comments`);
    }

}
