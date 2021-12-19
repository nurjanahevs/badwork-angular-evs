import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders()
  .set(
    'Content-Types',
    'application/json',
  );
  datauser = {}

  constructor(private http:HttpClient, private router:Router ) { }

  private getUserdata(response:any){
    return response.data
  }


  signupUser(user:any){
    return this.http.post<any>(`${environment.baseUrl}/user/signup`, user)
  }

  signinUser(user:any){
    return this.http.post<any>(`${environment.baseUrl}/user/signin`, user)
  }

  postAddress(user:any){
    return this.http.post<any>(`${environment.baseUrl}/user/address`, user)
  }

  login(){
    return !!localStorage.getItem('access_token')
  }

  getUsername(){
    return this.http.get<any[]>(environment.baseUrl + 'user').pipe(map(this.getUserdata))
  }


  logoutUser(){
    let removeToken = localStorage.removeItem('access_token');
    if(removeToken == null){
      this.router.navigate([''])
    }
  }

  get isLogin(): boolean{
      let token = localStorage.getItem('token');
      return (token !==null) ? true : false
  }

  getToken(){
      return localStorage.getItem('token');
  }


}
