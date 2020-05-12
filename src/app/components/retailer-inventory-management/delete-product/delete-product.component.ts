import { Component, OnInit } from '@angular/core';
import { RetailerInventoryProduct } from 'src/app/models/retailer-inventory-product';
import { RetailerInventoryProductService } from 'src/app/services/retailer-inventory-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }



}
