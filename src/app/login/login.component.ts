import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(1)])
  });
  get username() { return this.loginForm.get('username'); }

  get password() { return this.loginForm.get('password'); }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('login');
  }
}
