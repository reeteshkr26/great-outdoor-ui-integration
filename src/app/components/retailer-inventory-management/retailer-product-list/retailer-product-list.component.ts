import { Component, OnInit } from '@angular/core';
import { RetailerInventoryProduct } from 'src/app/models/retailer-inventory-product';
import { RetailerInventoryProductService } from 'src/app/services/retailer-inventory-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retailer-product-list',
  templateUrl: './retailer-product-list.component.html',
  styleUrls: ['./retailer-product-list.component.css']
})
export class RetailerProductListComponent implements OnInit {

  productList:RetailerInventoryProduct[];
   model:RetailerInventoryProduct;
  constructor(private service:RetailerInventoryProductService,private router:Router) { }

  ngOnInit(): void {
    this.loadProductList();
  }

  loadProductList(){
    
    this.service.getProductList().subscribe(
      (data) => { this.productList = data; }
    );
  }


  goToAddProduct(){
    this.router.navigate(['add-retailer-product'])
  }
  goToDeleteProduct(){
    this.router.navigate(['delete-retailer-product'])
  }
  goToSearchProduct(){
    this.router.navigate(['search-retailer-product'])
  }
  goToUpdateProduct(){
    this.router.navigate(['update-retailer-product'])
  }

}
