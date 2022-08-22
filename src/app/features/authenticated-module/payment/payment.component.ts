import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
order: Order;
  constructor(private orderService: OrderService, private router: Router) {
   }

  ngOnInit(): void {
    this.orderService.getCurrentOrder().subscribe(res => {
      this.order = res;
      console.log(this.order)
    })
  }
  onCancelOrder() {
    this.order = new Order();
    this.orderService.deleteOrder().subscribe(res => {
      res;
      this.router.navigate(['/checkout']);
    })
  }

}
