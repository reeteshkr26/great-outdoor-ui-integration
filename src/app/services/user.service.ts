import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:8080/api/user';
  constructor(private httpClient: HttpClient) { }

  getUserCategory(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/1`);
  }

  addUser(user: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, user);
  }
}
