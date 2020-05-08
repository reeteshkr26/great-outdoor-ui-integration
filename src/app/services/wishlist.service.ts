import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { WishlistModel } from '../models/wishlist-model';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  baseUrl: string;
  constructor(private http: HttpClient) {
    //this.baseUrl=`${environment.baseMwUrl}/wishlist`; //http://localhost:7000/wishlist
  }

  getWishlist(): Observable<WishlistModel[]> {
    return this.http.get<WishlistModel[]>(this.baseUrl);
  }

  delete(productId: number): Observable<WishlistModel> {
    return this.http.delete<WishlistModel>(`${this.baseUrl}/${productId}`); //http://localhost:7000/wishlist/2
  }
  addtowishlist(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product); //http://localhost:7000/wishlist/
  }
}
