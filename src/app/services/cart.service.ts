import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from '../models/cart.model';
import { CartItem } from '../models/cartItem.model';
import { FoodItem } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart = this.getCartFromLocalStorage();
private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addFoodToCart(foodItem: FoodItem):void {
    let cartItem = this.cart.items.find(item => item.foodItem.name === foodItem.name);
    if(cartItem){
      cartItem.quantity += 1;
      cartItem.price = cartItem.quantity * cartItem.foodItem.price;
      this.setCartToLocalStorage();
      return;
    }
    this.cart.items.push(new CartItem(foodItem));
    this.setCartToLocalStorage();
  }
  get getCurrentCartValue() {
    return this.cartSubject.value;
  }
  changeQuantity(foodItem: FoodItem, quantity: number) {
    let cartItem = this.cart.items.find(item => item.foodItem === foodItem);
    if(!cartItem)
    return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.foodItem.price;
    this.setCartToLocalStorage();

  }
  removeFromCart(foodItem: FoodItem) {
    this.cart.items = this.cart.items;
    this.cart.items = this.cart.items.filter(item => item.foodItem != foodItem);
    this.setCartToLocalStorage();
  }
  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  getCartObservable():Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage():void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('cart',cartJson);
    this.cartSubject.next(this.cart);
  }
  private getCartFromLocalStorage():Cart {
    const cartJson = localStorage.getItem('cart');
    return cartJson ? JSON.parse(cartJson) : new Cart();
  }
}
