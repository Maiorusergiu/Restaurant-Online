import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, throwError } from "rxjs";
import { Role, User } from "../models/user.model";
import { catchError, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { CartService } from "./cart.service";
import { Cart } from "../models/cart.model";

export interface AuthenticationData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    role: Role;
    registered: boolean;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient, private router: Router, private cartService: CartService) {
        this.cart = this.cartService.getCurrentCartValue;
    }
    cart: Cart
    user = new BehaviorSubject<User>(null);
    private tokenExpiration: any;
    private signUpApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBYiQ5-WX_Sn1822Tx50jRc-xMminKZRTA';
    private signInApi = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBYiQ5-WX_Sn1822Tx50jRc-xMminKZRTA';

    getUserValue():User {
        return this.user.value;
    }

    signUpRequest(email: string, password: string) {
        return this.http.post<AuthenticationData>(this.signUpApi, { email: email, password: password, returnSecureToken: true })
            .pipe(catchError(this.handleErrorForSignUp));
    }

    loginRequest(email: string, password: string) {
        return this.http.post<AuthenticationData>(this.signInApi, { email: email, password: password, returnSecureToken: true }
        ).pipe(catchError(this.handleErrorForLogin), tap(userData => {
            this.authenticationHandle(userData.email, userData.role, userData.localId, userData.idToken, +userData.expiresIn)
        }));
    }
    private authenticationHandle(userLocalId: string, role: Role, email: string, token: string, expiresIn: number) {
        const expiration = new Date(new Date().getTime() + expiresIn * 1000);
        const newUser = new User(userLocalId, role, email, token, expiration);
        if (newUser.email === 'maiorusergiu@gmail.com') {
            newUser.role = Role.admin
        } else {
            newUser.role = Role.user;
        }
        this.user.next(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
    }


    autoLogin() {
        const userLoggedIn: { email: string, role: Role, id: string, token: string, tokenExpirationDate: string } = JSON.parse(localStorage.getItem('user'));
        if (!userLoggedIn) {
            return;
        }
        const loggedUser = new User(userLoggedIn.email, userLoggedIn.role, userLoggedIn.id, userLoggedIn.token, new Date(userLoggedIn.tokenExpirationDate));
        if (loggedUser.getToken) {
            this.user.next(loggedUser);
            const expirationDuration = new Date(userLoggedIn.tokenExpirationDate).getTime() - new Date().getTime();
            this.autoLogout(expirationDuration);
        }
        
    }
    autoLogout(expirationDuration: number) {
        this.tokenExpiration = setTimeout(() => {
            this.logout()
            this.cartService.clearCart();
        }, expirationDuration)
        
    }
    logout() {
        this.user.next(null);
        localStorage.removeItem('user');
        this.router.navigate(['/login']);
        if (this.tokenExpiration) {
            clearTimeout(this.tokenExpiration);
        }
        this.tokenExpiration = null;
        this.cartService.clearCart();
    }
    private handleErrorForSignUp(errorResponse: HttpErrorResponse) {
        let messsageError = 'An unknown error occured!';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(messsageError);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_EXISTS':
                messsageError = 'This email already exists!';
                break;
            case 'INVALID_EMAIL':
                messsageError = 'Invalid email format!';
                break;
            case 'OPERATION_NOT_ALLOWED':
                messsageError = 'Password sign-in is disabled for this project!';
                break;
            case 'TOO_MANY_ATTEMPTS_TRY_LATER':
                messsageError = 'We have blocked all requests from this device due to unusual activity. Try again later..!';
                break;
        }
        
        return throwError(messsageError);
    }
    private handleErrorForLogin(errorResponse: HttpErrorResponse) {
        let messsageError = 'An unknown error occured!';
        if (!errorResponse.error || !errorResponse.error.error) {
            return throwError(messsageError);
        }
        switch (errorResponse.error.error.message) {
            case 'EMAIL_NOT_FOUND':
                messsageError = 'There is no email corresponding to this identifier.!';
                break;
            case 'INVALID_PASSWORD':
                messsageError = 'The password is invalid!';
                break;
            case 'USER_DISABLED':
                messsageError = 'The user account has been disabled by an administrator!';
                break;
        }
        console.log(errorResponse);
        return throwError(messsageError);
    }
}



