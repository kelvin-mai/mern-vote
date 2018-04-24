import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private API = 'http://localhost:4000';

  constructor(private http: HttpClient) {}

  get token() {
    return;
  }
  set token(val: string) {}

  get(link: string) {
    return this.http.get(`${this.API}/${link}`);
  }

  post(link: string, body: any) {
    return this.http.post(`${this.API}/${link}`, body);
  }

  auth(link: string, body: any) {
    return this.http.post(`${this.API}/auth/${link}`, body);
  }
}
