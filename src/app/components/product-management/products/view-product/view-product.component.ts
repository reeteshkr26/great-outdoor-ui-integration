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
    if((!!sessionStorage.getItem('userId'))&&(sessionStorage.getItem('userRole')=='PRODUCT_MASTER')){
      this.reloadData();
    }
    
  }


  reloadData() {
    this.productService.getProductList().subscribe((data:Product[] )=> {
      this.products = data;
      console.log(this.products);
    },(err)=>{
      alert("error while during fetching product details..!!")
    });
  }


  deleteProduct(id: string) {
    if (confirm("Are you sure want to delete..?")) {

      this.productService.deleteProduct(id)
      .subscribe((data) => {
          console.log(data);
          alert("Product Deleted Successfull...")
          this.reloadData();
        },
        error => alert("Error while during deletion of product"));
    }
    else{
      console.log('cancel')
    }
    
    
  }

}
