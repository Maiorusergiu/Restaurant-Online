import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart } from '../../../models/cart.model';
import { CartItem } from '../../../models/cartItem.model';
import { CartService } from '../../../services/cart.service';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
cart!:Cart;

  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute, private foodService:FoodService) { 
    this.cartService.getCartObservable().subscribe(res => {
      this.cart = res;
    })
  }

  
  ngOnInit(): void {
   
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.foodItem);
    
  }
  changeQuantity(cartItem: CartItem, quantityInString:string) {
  let quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.foodItem, quantity);
    
  }
}
