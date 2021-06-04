import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  loginStatus:boolean;
  user:User;
  constructor(private _httpClient: HttpClient) { }

  login(user:any):Observable<User>{
    return this._httpClient.put<any>(environment.APP_URL+ '/login',user);
  }
  updatePassword(user:any):Observable<User>{
    return this._httpClient.put<any>(environment.APP_URL+ '/forgot',user);
  }
  register(user:any):Observable<User>{
    return this._httpClient.post<any>(environment.APP_URL+ '/register',user);
  }
  searchUser(username:string):Observable<User[]>{
    return this._httpClient.get<User[]>(environment.APP_URL+ '/user/search?userName='+username);
  }
  setloginInfo(loginStatus:boolean){
    this.loginStatus=loginStatus;
  }
  getloginInfo(){
    return this.loginStatus;
  }
  setUser(data: User) {
    this.user=data;
  }
  getUser() {
    return this.user;
  }
}
