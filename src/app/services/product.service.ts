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

}
