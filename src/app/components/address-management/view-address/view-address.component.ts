import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/models/address';
import { Router } from '@angular/router';
import { AddressService } from 'src/app/services/address.service';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {

  addressList: Address[];
  submitted: boolean;
  dataFound: boolean;
  dataNotFound: boolean;

  constructor(private router: Router, private service: AddressService) { }

  ngOnInit(): void {

    this.loadAddressList();
  }
  loadAddressList() {
    this.service.getAddressList().subscribe(
      (data) => { this.addressList = data; }
    );
  }
  deleteAddress(addid: number) {
    this.submitted = true;
    this.service.deleteAddress(addid).subscribe(
      (data) => {
        this.dataFound = true;
        this.loadAddressList();
      },
      (err) => {
        this.dataNotFound = true;
        this.dataFound = false;
        setTimeout(() => this.dataNotFound = false, 3000);
      }
    )
  }
  setId = (addid: number) => {
    this.service.addid = addid;
    this.router.navigate(['address/edit-address'])

  }

}
