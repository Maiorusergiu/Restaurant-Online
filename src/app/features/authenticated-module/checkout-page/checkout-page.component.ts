import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cart } from '../../../models/cart.model';
import { Order } from '../../../models/order.model';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {
  cart!:Cart;
  order: Order = new Order();
  user: User;
  checkoutForm: FormGroup;
  constructor(private cartService: CartService, private userService: AuthService, private orderService: OrderService, private router: Router) {
    this.cart = this.cartService.getCurrentCartValue;
    this.user = this.userService.getUserValue();
    this.order.totalPrice = this.cart.totalPrice;
    this.order.totalQuantity = this.cart.totalCount;
    this.order.items = this.cart.items;
    
  }

  ngOnInit(): void {
    let userEmail = this.user.email;
    this.checkoutForm = new FormGroup({
      'email': new FormControl(userEmail, [Validators.required, Validators.email]),
      'fullName': new FormControl('', Validators.required),
      'address': new FormControl('',Validators.required),
    })
  }
  get fc() {
    return this.checkoutForm.controls;
  }
  CreateOrder() {
    if(this.checkoutForm.invalid){

      alert("Invalid inputs!");
      return;
    }
    this.order.email = this.checkoutForm.get('email').value;
    this.order.fullName = this.checkoutForm.get('fullName').value;
    this.order.address = this.checkoutForm.get('address').value;
    this.checkoutForm.reset();
    
    this.orderService.createOrder(this.order).subscribe(res => {
      this.order = res;
      this.router.navigate(['/payment']);
    })
   

  }

  

}
