import { Component, OnInit } from '@angular/core';
import { FormArrayName, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoodItem } from 'src/app/models/food.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';
import { isJSDocThisTag } from 'typescript';

@Component({
  selector: 'app-food-item-detail',
  templateUrl: './food-item-detail.component.html',
  styleUrls: ['./food-item-detail.component.css']
})
export class FoodItemDetailComponent implements OnInit {
  foodItem: FoodItem;
  subscription: Subscription;
  id: number;
  user: User;
  rateStar = new FormControl(null, Validators.required);
  constructor(private route: ActivatedRoute,
     private foodService: FoodService,
      private auth: AuthService,
      private cartService: CartService, private router: Router) {
    this.auth.user.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.subscription = this.foodService.foodItemSubject.subscribe((foodItem: FoodItem) => {
        this.foodItem = foodItem;

      })
      this.foodService.getFoodByIdFromDatabase(this.id).subscribe(res => {
        this.foodItem = res;
        this.foodService.foodItemSubject.next(res);
      })
    })
  }
  addToCart() {
    this.cartService.addFoodToCart(this.foodItem);
    this.router.navigateByUrl('/cart');
  }



}