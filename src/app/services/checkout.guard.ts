import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Cart } from "../models/cart.model";
import { CartService } from "./cart.service";


@Injectable({ providedIn: 'root' })
export class CheckoutGuard implements CanActivate{
cart: Cart
    constructor(private cartService: CartService, private router: Router){
        this.cart = this.cartService.getCurrentCartValue;
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.cart.items.length === 0){
            window.alert('Your cart is empty!');
            this.router.navigate(['/cart']);
        }
        return true;
    }

}