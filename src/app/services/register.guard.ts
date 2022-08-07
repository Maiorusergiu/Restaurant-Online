import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { User } from "../models/user.model";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class RegisterAndLoginGuard implements CanActivate {
    user: User;
    constructor(private authService: AuthService, private router: Router) {
        const userLoggedIn = this.authService.user;
        userLoggedIn.subscribe(response => this.user = response);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.user === null) {
            return true;
        }
        window.alert('You are already logged in!');
        return this.router.createUrlTree(['/categories']);
    }
}