import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-soup',
  templateUrl: './soup.component.html',
  styleUrls: ['./soup.component.css']
})
export class SoupComponent implements OnInit {
foodItems: FoodItem[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe(res => {
      this.foodItems = res;
    })
  }

}
