import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  products: Product[];


  constructor(private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }


  reloadData() {
    this.productService.getProductList().subscribe(data => {
      this.products = data;
      console.log(this.products);
    });
  }


  deleteProduct(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(data => {
          console.log(data);

        },
        error => console.log(error));
    this.router.navigate(['']);
  }

}
