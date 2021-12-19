import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {endpoint = environment.baseUrl;
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
    return this.http.post<any>(`${this.endpoint}/user/signup`, user)
  }

  signinUser(user:any){
    return this.http.post<any>(`${this.endpoint}/user/signin`, user)
  }

  postAddress(user:any){
    return this.http.post<any>(`${this.endpoint}/user/address`, user)
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

  getUserProfile(_id:any): Observable<any>{
    let api = `${this.endpoint}user/${_id}`;
    return this.http.get(api,{
        headers: this.headers
    }).pipe(
        map((res: any)=>{
            return res || {}
        }),
        catchError(this.handleError)
    )
}
  handleError(error:HttpErrorResponse){
        let pesan = '';

        if(error.error instanceof ErrorEvent){
            pesan = error.error.message

        }else{
            pesan = `Error code: ${error.status} \n Pesan Error: ${error.message}`;
        }
        return throwError(pesan);

  }
}
