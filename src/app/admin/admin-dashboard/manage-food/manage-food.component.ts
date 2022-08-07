import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-manage-food',
  templateUrl: './manage-food.component.html',
  styleUrls: ['./manage-food.component.css']
})
export class ManageFoodComponent implements OnInit, OnDestroy {
  addFoodForm: FormGroup;
  foodItems: FoodItem[];
  subscription: Subscription;
  searchText;
  constructor(private foodService: FoodService) { }

  ngOnInit(): void {

    let imagePath: any;
    let name: any;
    let delivery: any;
    let ingredients = new FormArray([]);
    let price: any;
    let category: any;
    this.addFoodForm = new FormGroup({
      'imagePath': new FormControl(imagePath, Validators.required),
      'name': new FormControl(name, Validators.required),
      'ingredients': ingredients,
      'deliveryTime': new FormControl(delivery, Validators.required),
      'price': new FormControl(price, Validators.required),
      'category': new FormControl(category, Validators.required),
    },
    )

    this.subscription = this.foodService.foodSubjectChanged.subscribe((foodItems: FoodItem[]) => {
      this.foodItems = foodItems;
    })
    this.subscription = this.foodService.returnFoodItemsFromDataBase();
  }

  onAddFoodForm() {
    this.foodService.addFoodItem(this.addFoodForm.value);
    this.addFoodForm.reset();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.addFoodForm.get('ingredients')).removeAt(index);
  }
  onAddIngredient() {
    (<FormArray>this.addFoodForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }
}
