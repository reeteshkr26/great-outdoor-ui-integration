import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Address } from '../models/address';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  addid:number;
  baseUrl:string;

  private apiurl="assets/address.json";
  constructor(private http:HttpClient) { 
    //this.baseUrl=`${environment.baseMwUrl}/address`;
  }
  getAddressList():Observable<any[]>{
    return this.http.get<any[]>(this.apiurl);
  }
 /* getAddressList():Observable<Address[]>{
    return this.http.get<Address[]>(this.baseUrl + '/all');  
}*/

getById(addid: number):Observable<Address>{
  return this.http.get<Address>(`${this.baseUrl}/${addid}`);  
}

addAddress(addressModel:Address):Observable<Address>{
  return this.http.post<Address>(this.baseUrl + '/add',addressModel);
}
deleteAddress(addid:number):Observable<void>{
  return this.http.delete<void>(`${this.baseUrl + '/delete'}/${addid}`);
}
updateAddress(addid:number, address:Address):Observable<Address>{
  return this.http.put<Address>(`${this.baseUrl + '/update'}/${addid}`,address);
}
}
