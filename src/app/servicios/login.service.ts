import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  postLogin(username: any) {
    return this.http.post("http://challenge-react.alkemy.org/", username)
  }



}
