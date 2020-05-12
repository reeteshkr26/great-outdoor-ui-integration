import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { ProductCategory } from 'src/app/models/product-category';
import { Product } from 'src/app/models/product';
import { FormComponentBase } from 'src/app/classes/form-component-base';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent extends FormComponentBase implements OnInit, AfterViewInit {

  @ViewChild('id') firstItem: ElementRef;
  productCategory;
  addedSuccess:boolean;
  productForm: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService) { 
    super();
    this.validationMessages = {
      productName: {
        required: 'Required',
        maxlength: 'Id maximum length is 10.',
        pattern: 'Alphanumeric at start and end only. Hyphen,underscores and space in between.'
      },
      productPrice: {
        required: 'Required',
        pattern: 'Enter valid price.'
      },
      productColor: {
        required: 'Required',
        pattern: 'Enter valid color.'
      },
      productCategory: {
        required: 'Required',
      },
      productQuantity: {
        required: 'Required',
        pattern: 'Valid product quantity.'
      },
      productSpecification: {
        required: 'Required',
        //pattern: 'Product description allowed letters, digits,spaces and special characters .Start with a letter.'
      },

    };
    this.formErrors = {
      productName: '',
      productPrice: '',
      productColor: '',
      productCategory: '',
      productQuantity: '',
      productSpecification: ''
    };
  }

  ngOnInit(): void {
    console.log(ProductCategory);
    this.productCategory = ProductCategory;

    this.productForm = this.fb.group({
      productName: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+(?:[\w -]*[a-zA-Z0-9]+)*$')]],
      productPrice: ['', [Validators.required, Validators.pattern('^[1-9][0-9]*')]],
      productColor: ['', [Validators.required, Validators.pattern('[a-zA-Z][a-zA-Z ]+[a-zA-Z]$')]],
      productCategory: ['', [Validators.required]],
      productQuantity: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
      productSpecification: ['', [Validators.required]],
    });
  }
  onSubmit(value: Product) {
  console.log(value);
    this.productService.addProduct(this.productForm.value).subscribe(data =>
        data,
      error => console.log(error),
      () => {
        alert('Product added successfully!');
      });
      this.productForm.reset();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.productForm);
  }

}
