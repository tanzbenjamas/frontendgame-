import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class MariamService {
  public API = 'http://thaiwhales.org/service/mariam/';

  constructor(private http: HttpClient) { }
  // private http: HttpClient

  getChoice(): Observable<any> {
    return this.http.get(this.API + '/choice');
  }
  getQuestion(): Observable<any> {
    return this.http.get(this.API + 'get_question.php');
  }
  getScore(): Observable<any> {
    return this.http.get(this.API + '/score');
  }

  postScore(data): Observable<any> {
    return this.http.post(this.API + 'user_score.php', JSON.stringify(data));
  }
}