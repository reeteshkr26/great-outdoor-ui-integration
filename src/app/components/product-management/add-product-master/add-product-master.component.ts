import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormComponentBase } from 'src/app/classes/form-component-base';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrossFieldErrorMatcher } from 'src/app/classes/cross-field-error-matcher';
import { UserService } from 'src/app/services/user.service';
import { passwordsDoNotMatch } from 'src/app/classes/passwords-do-not-match.validator';
import { User } from 'src/app/models/user';
import { ProductMaster } from 'src/app/models/product-master';

@Component({
  selector: 'app-add-product-master',
  templateUrl: './add-product-master.component.html',
  styleUrls: ['./add-product-master.component.css']
})
export class AddProductMasterComponent extends FormComponentBase implements OnInit, AfterViewInit {

  @ViewChild('email') firstItem: ElementRef;
  form!: FormGroup;
  hidePassword = true;
  errorMatcher = new CrossFieldErrorMatcher();
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    super();

    this.validationMessages = {
      email: {
        required: 'Email is required.',
        email: 'Email is not properly formatted.',
      },
      userName: {
        required: 'User name is required.',
        minlength: 'User name minimum length is 6.',
        maxlength: 'User name maximum length is 15.',
        pattern: ' Allowed characters letters, numbers only. No spaces.'
      },
      password: {
        required: 'Password is required.',
        minlength: 'Password minimum length is 6.',
        maxlength: 'Password maximum length is 15.',
        pattern: 'Password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.'
      },
      confirmPassword: {
        required: 'Confirm password is required.',
        minlength: 'Confirm password minimum length is 6.',
        maxlength: 'Confirm password maximum length is 15.',
        pattern: 'Confirm password minimum length 6, requires one letter, one number, one special character !@#$%^&* no spaces.',
        passwordsDoNotMatch: 'Passwords must match.'
      },

      passwordsGroup: {
        passwordsDoNotMatch: 'Passwords must match.'
      }
    };

    this.formErrors = {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
      passwordsGroup: ''
    };
   }

  ngOnInit(): void {
 

    this.form = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.email]],
      userName: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
        Validators.pattern('^[a-zA-Z0-9]*[a-zA-Z][a-zA-Z0-9]*$')]],
      passwordsGroup: this.formBuilder.group({
        password: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
        confirmPassword: ['', [
          Validators.required,
          Validators.maxLength(15),
          Validators.pattern('^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$')]],
      }, {validators: passwordsDoNotMatch})
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.firstItem.nativeElement.focus();
    }, 250);
    this.startControlMonitoring(this.form);
  }

  registerClicked(value: User) {
    console.log(this.form.value);
    const getPassword = this.form.get(['passwordsGroup', 'password']).value;
    const getEmail = this.form.get('email').value;
    const getUsername = this.form.get('userName').value;
    const user: ProductMaster = {email: getEmail, password: getPassword, userId: '', userName: getUsername};
    this.userService.addUser(user).subscribe(data =>
      console.log(data), error => console.log(error));
    alert('Product Master added!');
    this.form.reset();
  }



}
