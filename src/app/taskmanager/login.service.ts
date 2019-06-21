import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user_url="model\\user.ts";
  constructor(private _http: HttpClient) { }

  getUserData(){
    return this._http.get(this.user_url);
  }
}
