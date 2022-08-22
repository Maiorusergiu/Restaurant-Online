import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationData, AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  errorMsg: string = null;
  isLoading = false;

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService) {

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


  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'confirmPassword': new FormControl('', [Validators.required]),
    }, { validators: this.confirmPassword.bind(this) }
    )
  }
  onSubmitForm() {
    if (this.signUpForm.invalid) {
      return;
    }
    this.isLoading = true;
    let userObservable: Observable<AuthenticationData>;
    const email = this.signUpForm.value.email;
    const password = this.signUpForm.value.password
    userObservable = this.authService.signUpRequest(email, password);
    userObservable.subscribe((response) => {
      console.log(response);
      if (this.activatedRoute.snapshot.data) {
        const button = document.getElementById("open-modal");
        button.click();
      }
      this.isLoading = false;
    }, errorMessage => {
      console.log(errorMessage);
      this.errorMsg = errorMessage;
      this.isLoading = false;
    })
    this.signUpForm.reset();
  }




  confirmPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
