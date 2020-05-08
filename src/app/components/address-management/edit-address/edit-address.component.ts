import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {

  success:boolean;
  addid: number;
  addressModel:Address;
  addressForm:FormGroup;
  valueModel:Address;

  constructor(private router:Router, private location: Location, private service:AddressService) { 
    this.addressModel=new Address();
    }

  ngOnInit(): void {
    this.addressForm= new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      addline: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      city: new FormControl('', [Validators.required, Validators.maxLength(30)]),
      pincode: new FormControl('', [Validators.required, Validators.min(100000),Validators.max(999999)]),
      state: new FormControl('', [Validators.required, Validators.maxLength(30)]),
    });
    this.addid=this.service.addid;
    this.valueFun(); 
  }

  public valueFun() {
    console.log("hello");
    this.service.getById(this.addid).subscribe(
    (data) => {
      this.valueModel=data;
      this.addressForm.get('addline').setValue(this.valueModel.addline);
      this.addressForm.get('city').setValue(this.valueModel.city);
      this.addressForm.get('pincode').setValue(this.valueModel.pincode);
      this.addressForm.get('state').setValue(this.valueModel.state  );
    });
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.addressForm.controls[controlName].hasError(errorName);
  }
 
   public onCancel = () => {
     this.location.back();
  }
 
  public addAddress = (addressFormValue: {fullName:string, addline: string; city: string; pincode: number; state: string; }) => {
    if (this.addressForm.valid) {
      this.executeAddressCreation(addressFormValue);
    }
  }
  private executeAddressCreation = (addressFormValue: {fullName:string, addline: string; city: string; pincode: number; state: string; }) => {
    let address: Address = {
      addid:null,
      fullName:addressFormValue.fullName,
      addline: addressFormValue.addline,
      city: addressFormValue.city,
      pincode: addressFormValue.pincode,
      state: addressFormValue.state
    } 
    this.service.updateAddress(this.addid,address).subscribe(
      (data)=>{
      this.success=true;
      setTimeout(()=>this.success=false,3000);
      this.router.navigate(['/address'])
    })
}

}
