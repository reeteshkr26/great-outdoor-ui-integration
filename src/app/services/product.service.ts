import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl="assets/products.json";
  private baseUrl = 'http://localhost:8080/api/products';

  constructor(private httpClient:HttpClient) { }

  getProductList():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.apiurl);
  }
  addProduct(product: object): Observable<object> {
    return this.httpClient.post(`${this.baseUrl}`, product);
  }

  updateProduct(product: any, id: string): Observable<object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, product);
  }

  deleteProduct(id: string): Observable<any> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  getProduct(id: string): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
}
