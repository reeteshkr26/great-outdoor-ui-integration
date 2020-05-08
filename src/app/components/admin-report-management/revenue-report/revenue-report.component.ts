import { Component, OnInit } from '@angular/core';

export interface RevenueReport {
  product: string;
  user: number;
  Price: number;
  
}

const Productdata: RevenueReport[] = [
  {user: 1, product: 'Handbag', Price: 10079},
  {user: 2, product: 'Outdoorkit', Price: 40026},
  {user: 3, product: 'DSLR', Price: 6941},
  {user: 4, product: 'Bottle', Price: 9122},
  {user: 5, product: 'Books', Price: 1811},
  {user: 6, product: 'Paintings', Price: 1107},
  {user: 7, product: 'Bulbs', Price: 1067},
];
@Component({
  selector: 'app-revenue-report',
  templateUrl: './revenue-report.component.html',
  styleUrls: ['./revenue-report.component.css']
})
export class RevenueReportComponent implements OnInit {
  
  displayedColumns: string[] = ['user', 'product', 'Price'];
  dataSource = Productdata;
  constructor() { }

  ngOnInit(): void {
  }

 

}
