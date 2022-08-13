import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-spagetti',
  templateUrl: './spagetti.component.html',
  styleUrls: ['./spagetti.component.css']
})
export class SpagettiComponent implements OnInit {
foodItems: FoodItem[];
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.returnFoodItemsFromDataBase().subscribe(res => {
      this.foodItems = res;
    })
  }

}
