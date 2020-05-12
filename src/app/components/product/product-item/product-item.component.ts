import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  @Input() addedToWishlist: boolean;
  constructor(private cartService:CartService,private wishlistService:WishlistService) { }

  ngOnInit(): void {
  }
  
  handleAddToCart(){
    this.cartService.addToCart(this.productItem);
  }

  handleAddToWishlist() {
    this.wishlistService.addtowishlist(this.productItem).subscribe(() => {
      alert("item added to wishlist..")
      this.addedToWishlist = true;
    })
  }

  handleRemoveFromWishlist() {
    this.wishlistService.removeFromWishlist(this.productItem.productId,sessionStorage.getItem('userId')).subscribe(() => {
      alert("item removed from wishlist..")
      this.addedToWishlist = false;
    })
  }

}
