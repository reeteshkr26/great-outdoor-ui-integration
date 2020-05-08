import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RetailerInventoryProduct } from '../models/retailer-inventory-product';


@Injectable({
  providedIn: 'root'
})
export class RetailerInventoryProductService {

  baseUrl:string;
  constructor(private http:HttpClient) {
    //this.baseUrl=`${environment.baseMwUrl}/inventory`;
   }

  getProductList():Observable<RetailerInventoryProduct[]>{
    return this.http.get<RetailerInventoryProduct[]>(this.baseUrl);  
  }
  addProduct(product:RetailerInventoryProduct):Observable<RetailerInventoryProduct>{
    return this.http.post<RetailerInventoryProduct>(this.baseUrl,product);
  }
  findProductById(productId:string):Observable<RetailerInventoryProduct>{
    return this.http.get<RetailerInventoryProduct>(`${this.baseUrl}/${productId}`);
  }
  deleteProductById(productId:string):Observable<void>{
    return this.http.delete<void>(`${this.baseUrl}/${productId}`); 
  }
  updateProduct(product:RetailerInventoryProduct):Observable<RetailerInventoryProduct>{
    return this.http.put<RetailerInventoryProduct>(this.baseUrl,product);
  }
}
