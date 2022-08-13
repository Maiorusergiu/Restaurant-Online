import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Cart } from '../models/cart.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cart: Cart;
  totalCount: number;
  constructor(private authService: AuthService, private cartService: CartService) {
    this.authService.user.subscribe(response => this.user = response);
    //din service, am luat valoarea initiala a lui "user" si am stocat-o in
    //variabila de aici
    //loggedin pentru ngIf
    this.cartService.getCartObservable().subscribe(cart => {
      this.cart = cart;
    })
  }
  user: User;
  isLoggedIn = false;
  ngOnInit(): void {
    console.log(this.user)
    if (this.user) {
      this.isLoggedIn = true;
    } else {
      !this.isLoggedIn;
    }
  }
  onLogout() {
    this.authService.logout();
  }

}
