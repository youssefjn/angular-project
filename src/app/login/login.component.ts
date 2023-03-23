import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    address: null,
    phoneNumber: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      email: '',
      address: '',
      roles: ''
    });
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(f: NgForm): void {
    alert('Your order has been submitted');
    window.location.href = 'http://localhost:4200/store';
  }
}