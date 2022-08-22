import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../models/user.model';
import { AuthenticationData, AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMsg: string = null;
  loggedIn = false;
  isLoading = false;
  user: User;
  constructor(private authService: AuthService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.authService.user.subscribe(res => this.user = res);
  }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
    })

  }


  onLoginForm() {

    if (!this.loginForm.valid) {
      return;
    }
    if (this.loginForm.valid) {
      this.isLoading = true;
      let userObservableForLogin: Observable<AuthenticationData>;
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      userObservableForLogin = this.authService.loginRequest(email, password);
      userObservableForLogin.subscribe((response) => {
        console.log(response);
        this.isLoading = false;
        if (this.activatedRoute.snapshot.data) {
          console.log("Suntem in menu");
          const button = document.getElementById("open-modal");
          button.click();
        }


      }, errorMessage => {
        this.errorMsg = errorMessage;
        this.isLoading = false;

      })
      this.loginForm.reset();
    }

  }



  error_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'required', message: 'Please enter a valid email address.' }
    ],

    'password': [
      { type: 'required', message: 'Password is required.' },
    ],
    'confirmPassword': [
      { type: 'required', message: 'Confirm password is required.' },
    ],
  }

}
