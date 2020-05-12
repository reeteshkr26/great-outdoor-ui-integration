import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from '../models/cart-item';
import { HttpClient } from '@angular/common/http';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cartServiceEvent = new BehaviorSubject({});
  baseUrl:string;
  cartItems:CartItem[]=[];
  public cartTotalPrice=0;
  public cartQty=0;
 
   constructor(private http:HttpClient,private productService:ProductService,private router:Router) { 
     this.baseUrl=`${environment.baseMWUrl}/cart-service/api`;
     if((!!sessionStorage.getItem('userId'))&&(sessionStorage.getItem('userRole')=='RETAILER_USER')){
      this.getCartDetailsByUser();
     }
     
   }
   
   private userName:string="admin"
 
   getCartDetailsByUser(){
      this.http.get<CartItem[]>(`${this.baseUrl}/carts/${sessionStorage.getItem('userId')}`).subscribe(
        (data)=>{
          this.cartItems=data;
          this.cartQty=data.length;
          this.cartTotalPrice=this.calculateTotalPrice();
          this.cartServiceEvent.next({"status":"completed"})//emitter
        }   
       ,error=>{
         alert("Error while fetching the cart Details");
       }
      );
    
   }
   getCartDetails(){
 
     return this.cartItems;
   }
   calculateTotalPrice(){
     let obj = this.cartItems;
     let totalPrice  = 0;
    
     for(var o in obj ){      
       totalPrice = totalPrice +obj[o].cartItemPrice;
     }
 
     return totalPrice;
   }
 
   getQty(){
     console.log(this.cartQty);
     return this.cartQty;
   }
 
   addToCart(productItem:Product){
 
     let cartItem=new CartItem(0,sessionStorage.getItem('userId'),productItem.productId,productItem.productPrice,1);
     console.log("cartItem");
     this.http.post<CartItem>(`${this.baseUrl}/carts/addToCart`,cartItem).subscribe(
       (data)=>{
 
         this.getCartDetailsByUser();
         alert("Item added to cart Successfully...")
         this.router.navigate(['cart']);
       },
       error=>{
         //if the products is already in cart
           alert("Error in AddCart API "+error.message);
       }
     );
   }
   removeCartItemByUserNameAndProductId(cartItem:CartItem){
     this.http.delete(`${this.baseUrl}/carts/removeProductFromCart/${cartItem.userId}/${cartItem.cartId}`).subscribe(
       (data:any)=>{
         this.getCartDetailsByUser();
       },error=>{
         alert("Error while fetching the cart Details");
       });
   }
   removeAllCartByUserName(userId:String){
     this.http.delete(`${this.baseUrl}/carts/removeProductFromCart/${userId}`);
   }
 
   updateCartQuantity(cartItem:CartItem){
     this.http.put<CartItem>(`${this.baseUrl}/carts/updateCartItem`,cartItem).subscribe(
       (data)=>{
         this.getCartDetailsByUser();
       },
       (error)=>{
         alert("Error while fetching the cart Details");
       }
     );
   }
 
}
