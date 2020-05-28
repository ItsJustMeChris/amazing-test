import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from './user';

const httpOptions = {
  headers: new HttpHeaders({
    'Authorization': 'AmazingInterview'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const users = this.http.get<User[]>('http://rest.ngrok.io/users', httpOptions);
    return users;
  }

  getUser(id: string): Observable<User> {
    const user = this.http.get<User>(`http://rest.ngrok.io/users/${id}`, httpOptions);
    return user;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }
}
