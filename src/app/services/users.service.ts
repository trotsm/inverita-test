import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  /**
   * Method adds user to DB
   * @param name - name from input
   */
  public setUser(name): Observable<any> {
    return this.http.post(`http://localhost:8081/api/user`, name)
      .pipe(
        map((result) => result)
      );
  }

  /**
   * Method gets all users from DB
   * @returns array of users
   */
  public getUsers(): Observable<any> {
    return this.http.get(`http://localhost:8081/api/users`)
      .pipe(
        map((result) => result)
      );
  }
}
