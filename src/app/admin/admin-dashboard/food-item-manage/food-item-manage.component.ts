import { Component, Input, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';



@Component({
  selector: 'app-food-item-manage',
  templateUrl: './food-item-manage.component.html',
  styleUrls: ['./food-item-manage.component.css']
})
export class FoodItemManageComponent implements OnInit {
  @Input() index;
  @Input() foodItem: FoodItem;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {



  }
  getIndexComponent(index: number) {
    this.index = this.foodService.getFoodByIdFromDatabase(index);
  }


}
