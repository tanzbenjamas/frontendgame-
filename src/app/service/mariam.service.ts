import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class MariamService {
  public API = '//localhost:8080';

  constructor(private http: HttpClient) { }

  getChoice(): Observable<any> {
    return this.http.get(this.API + '/choice');
  }
  getQuestion(): Observable<any> {
    return this.http.get(this.API + '/question');
  }
  getScore(): Observable<any> {
    return this.http.get(this.API + '/score');
  }
}
