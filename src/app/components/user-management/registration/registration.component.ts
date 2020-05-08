import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user:User;
  msg='';
  constructor(private _router : Router) { 
    this.user=new User();
  }

  ngOnInit(): void {
  }

  registerUser(){
   /* this._service.registerUserFromRemote(this.user).subscribe(
      data => {
        console.log("response received");
        this._router.navigate(['/login'])
      },
      error => {
        console.log("Exception Occured");
        this.msg=error.error;
      }
    )*/

}

}
