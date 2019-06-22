import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user_url="assets\\jsondata\\user.json";
  constructor(private _http: HttpClient) { }

  getUserData():Observable<any>{
    return this._http.get(this.user_url);
  }
}
