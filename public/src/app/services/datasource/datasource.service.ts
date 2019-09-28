import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class DataSourceService {
    constructor(private http: HttpClient) { }
    private requestHeaders = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    get(url, headerOptions?) {
        const requestEndPoint = `${environment.serviceEndPoints}/${url}`;
        if (headerOptions) {
            this.requestHeaders = headerOptions;
        }
        return this.http.get(environment.serviceEndPoints, this.requestHeaders);
    }

    post(url, body, headerOptions?) {
        const requestEndPoint = `${environment.serviceEndPoints}/${url}`;
        if (headerOptions) {
            this.requestHeaders = headerOptions;
        }
        return this.http.post(requestEndPoint, body, this.requestHeaders);
    }
}
