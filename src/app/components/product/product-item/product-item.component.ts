import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  
  handleAddToCart(){
    this.cartService.addToCart(this.productItem);
  }

}
