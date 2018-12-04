import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, Validators.required)
    });
  }

  onLogin() {
    const userCredentials = {
      userNick: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this._authService.signin(userCredentials)
      .subscribe(data => {
        this.router.navigate(['home']);
      });
  }

}
