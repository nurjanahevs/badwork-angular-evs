import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, private router : Router) { }

  public getProduct() : Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/product`).pipe(map(this.getProductData))
  }
  private getProductData(response:any) {
    return response.product
  }
  private categoryData(response:any){
    return response.data
  }
  getDetailProduct(_id:any) : Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/product/${_id}`).pipe(map(res => {
      return res
    }))
  }
  public getCategory() : Observable<any[]> {
    return this.http.get<any[]>(`${environment.baseUrl}/category`).pipe(map(this.categoryData))
  }
  public getProductCategory(_id:any) : Observable<any[]>{
    return this.http.get<any[]>(`${environment.baseUrl}/product/category/${_id}`).pipe(map(this.getProductData))
  }
}
