import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
orders: Order[];
cart: Cart;
id: number;
  constructor(private orderService: OrderService, private cartService: CartService) {
    this.cart = this.cartService.getCurrentCartValue;
   }

  ngOnInit(): void {
    this.orderService.orderSubjectArray.subscribe(res => {
      this.orders = res;
      console.log(this.orders);
    })
  }

  onDeleteOrder(id: number) {
   this.orderService.deleteOrder().subscribe(res => {
    this.orders.splice(id, 1);
    this.orderService.orderSubjectArray.next(this.orders.slice());
    res;
   })
  }

}
