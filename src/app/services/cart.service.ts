import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItemList: any;
  public productList = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient, private router: Router) {}

  getProducts() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  }

  getTotalPrice() {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
        this.productList.next(this.cartItemList);
      }
    });
  }

  removeAllCart(){
    this.cartItemList = []
  }

  addCart = (cart: any) => {
    return this.http
      .post<any>(`${environment.baseUrl}/order`, cart)
      .subscribe((res: any) => {
        console.log(res.data);
      });
  };
  public getCart(): Observable<any[]> {
    return this.http
      .get<any[]>(`${environment.baseUrl}/order/list`)
      .pipe(map(this.getCartData));
  }
  public addQuantityOrder(_id: any) {
    return this.http
      .get<any>(`${environment.baseUrl}/order/add/${_id}`)
      .subscribe((res: any) => {
        console.log(res.data);
      });
  }
  public deleteQuantityOrder(_id: any) {
    return this.http
      .delete<any>(`${environment.baseUrl}/order/delete/${_id}`)
      .subscribe((res: any) => {
        console.log(res.data);
      });
  }
  private getCartData(response: any) {
    return response.data;
  }

  public deleteCart(_id: any) {
    return this.http.delete(`${environment.baseUrl}/order/${_id}`);
  }
  public checkout(checkout: any) {
    return this.http.post(`${environment.baseUrl}/checkout`, checkout);
  }
  public orderHistory(): Observable<any[]> {
    return this.http
      .get(`${environment.baseUrl}/checkout/list`)
      .pipe(map(this.getCartData));
  }

  handleError(error: HttpErrorResponse) {
    let message = '';

    if (error.error instanceof ErrorEvent) message = error.error.message;
    else
      message = `Error code : ${error.status} \n Message Error : ${error.message}`;
    return throwError(message);
  }
}
