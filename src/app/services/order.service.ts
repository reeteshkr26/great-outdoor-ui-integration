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
    this.baseUrl=`${environment.baseMWUrl}/cart/orders`;
  }

  checkOutCart(request:any):Observable<any>{
     return this.http.post<any>(`${this.baseUrl}`,request);
  }
  getAllOrderList(userId:string):Observable<any[]>{
    return this.http.get<any[]>(`${this.baseUrl}/${userId}`);
  }
  getOrderByOrderId(orderId:string):Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/OrderId/${orderId}`);
  }
  updateOrderDispatchStatus(orderId:string):Observable<any>{
    let statusCode={
      "statusCode":2
    }
    return this.http.put<any>(`${this.baseUrl}/cancelOrder/${orderId}`,statusCode);
  }
}
