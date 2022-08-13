import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
foodItems: FoodItem[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe(res => {
      this.foodItems = res;
    })
  }

}
