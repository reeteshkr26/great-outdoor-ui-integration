import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  totalNoOfCartItems:number
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.cartServiceEvent.subscribe(data => {
      this.totalNoOfCartItems = this.cartService.getCartDetails().length;
     
    });
  }

}
