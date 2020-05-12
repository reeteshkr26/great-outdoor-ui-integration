import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList:Product[]=[];
  wishlistProductId:any[]=[];
  constructor(private productService:ProductService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
    if((!!sessionStorage.getItem('userId'))&&(sessionStorage.getItem('userRole')=='RETAILER_USER')){
      this.loadProductList();
      this.loadWishlist();
    }
   
  }
  loadProductList(){
    this.productService.getProductList().subscribe(
      (data)=>{
        this.productList=data;
      }
    )
  }
  loadWishlist(){
      this.wishlistService.getWishlist().pipe(    
        map((result: any[]) => {
        let productIds = []

        result.forEach(item => productIds.push(item.productId))
          console.log(productIds)
        return productIds;
      })).subscribe((data:[])=>{
        
        this.wishlistProductId=data;
        console.log(this.wishlistProductId)
      })
  }

}
