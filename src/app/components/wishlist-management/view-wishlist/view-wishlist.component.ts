import { Component, OnInit } from '@angular/core';
import { WishlistModel } from 'src/app/models/wishlist-model';

@Component({
  selector: 'app-view-wishlist',
  templateUrl: './view-wishlist.component.html',
  styleUrls: ['./view-wishlist.component.css']
})
export class ViewWishlistComponent implements OnInit {

  wishList: WishlistModel[]=[];
  dataFound:boolean;
  model:WishlistModel;
  dataNotFound:boolean;
  submitted:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  delete(productId) {
    this.submitted = true;
   /* this.service.delete(productId).subscribe(
      (data) => {
        this.dataFound = true;
        this.model = data;
        console.log(this.model);
      },
      (err) => {
        this.dataNotFound = true;
        this.dataFound = false;
        setTimeout(() => this.dataNotFound = false, 3000);
      }
    )*/
  }
}
