import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { isThisTypeNode } from "typescript";
import { Role, User } from "../models/user.model";
import { AuthService } from "./auth.service";

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {
    user: User;
    role: Role;
    constructor(private authService: AuthService, private router: Router) {
        this.authService.user.subscribe(response => this.user = response);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (this.user.role === 1) {
            return true;
        }
        window.alert('You have no permission!');
        return this.router.createUrlTree(['/']);
    }

}