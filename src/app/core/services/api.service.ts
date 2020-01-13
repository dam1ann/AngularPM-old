import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

const API_URL = 'https://jsonplaceholder.typicode.com';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${API_URL}${path}`, {params})
            .pipe(catchError(this.formatErrors));
    }

    private formatErrors(error: any) {
        return throwError(error.error);
    }
}
