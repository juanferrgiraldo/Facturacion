import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Constants } from '../constants.component';

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}
  signin(user: any) {
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this._http.post<any>(Constants.API + '/signup', body, {headers: headers})
    .pipe(map((res: Response) => res.json()),
      catchError((err: Response) => Observable.throw(err.json())));
  }
}
