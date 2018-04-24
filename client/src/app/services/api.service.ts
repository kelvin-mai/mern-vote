import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  get token() {
    return localStorage.getItem('token');
  }
  set token(val: string) {
    val === '' ? localStorage.clear() : localStorage.setItem('token', val);
  }

  auth(link: string, body: any): Observable<any> {
    return this.http.post(`${this.API}/auth/${link}`, body);
  }

  allPolls(): Observable<any> {
    return this.http.get(`${this.API}/api/poll/`);
  }
  usersPosts(): Observable<any> {
    return this.http.get(`${this.API}/api/poll/user`);
  }
  createPoll(body: any) {
    return this.http.post(`${this.API}/api/poll/`, body);
  }
  getPoll(id: string) {
    return this.http.get(`${this.API}/api/poll/${id}`);
  }
  castVote(id: string, body: any) {
    return this.http.post(`${this.API}/api/poll/${id}`, body);
  }
  deletePoll(id: string) {
    return this.http.delete(`${this.API}/api/poll/${id}`);
  }
}
