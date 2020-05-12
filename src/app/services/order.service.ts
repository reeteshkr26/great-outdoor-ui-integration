import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseUrl:String;

  constructor(private http:HttpClient) { 
    this.baseUrl=`${environment.baseMWUrl}/cart-service/api`;
  }

  checkOutCart(request:any):Observable<any>{
     return this.http.post<any>(`${this.baseUrl}/orders`,request);
  }
  getAllOrderList(userId:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/orders/userId/${userId}`);
  }
  getOrderByOrderId(orderId:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/orders/orderId/${orderId}`);
  }
  updateOrderDispatchStatus(orderId:string):Observable<any>{
    let statusCode={
      "statusCode":2
    }
    return this.http.put<any>(`${this.baseUrl}/orders/cancelOrder/${orderId}`,statusCode);
  }
}
