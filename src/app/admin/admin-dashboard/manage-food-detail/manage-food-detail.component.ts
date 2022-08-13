import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { FoodItem } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-manage-food-detail',
  templateUrl: './manage-food-detail.component.html',
  styleUrls: ['./manage-food-detail.component.css']
})
export class ManageFoodDetailComponent implements OnInit {
  id: number
  editFoodForm: FormGroup;
  foodItem: FoodItem;
  subscription: Subscription;
  foodItemSuscription;
  constructor(private foodService: FoodService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.editFoodForm = new FormGroup({
      'imagePath': new FormControl(),
      'name': new FormControl(),
      'deliveryTime': new FormControl(),
      'ingredients': new FormControl(),
      'price': new FormControl(),
      'category': new FormControl(),
    })
    this.route.params.subscribe((params: Params) => {

      this.id = +params['id'];
      this.subscription = this.foodService.foodItemSubject.subscribe((foodItem: FoodItem) => {
        this.foodItem = foodItem;
        let ingredientsArray = new FormArray([]);
        if (foodItem['ingredients']) {
          for (let ingredient of foodItem.ingredients) {
            ingredientsArray.push(new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            }))
          }
        }
        this.editFoodForm = new FormGroup({
          'imagePath': new FormControl(foodItem.imagePath, Validators.required),
          'name': new FormControl(foodItem.name, Validators.required),
          'ingredients': ingredientsArray,
          'deliveryTime': new FormControl(foodItem.deliveryTime, Validators.required),
          'price': new FormControl(foodItem.price, Validators.required),
          'category': new FormControl(foodItem.category, Validators.required),
        })

      })
      this.foodService.getFoodByIdFromDatabase(this.id).subscribe(res => {
        this.foodItem = res;
        this.foodService.foodItemSubject.next(this.foodItem);
        console.log(res);
      })
    })



    // this.editForm();

  }
  onGetFoodById() {
    return this.foodService.getFoodByIdFromDatabase(this.id);
  }
  onEditFoodItem() {
    this.foodService.updateFoodItem(this.id, this.editFoodForm.value).subscribe((res) => {
      this.foodItem = this.editFoodForm.value;
      this.foodService.foodSubjectChanged.next(this.foodService.foodItems);
      this.foodService.foodItemSubject.next(this.editFoodForm.value);
      console.log(res);
    });
    this.editFoodForm.reset;

  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.editFoodForm.get('ingredients')).removeAt(index);
  }

  onDeleteFoodItem() {
    this.foodService.deleteFoodItem(this.id).subscribe((res: any) => {
      this.foodItem = res;
      this.foodService.foodItems.splice(this.id, 1);
      this.foodService.foodSubjectChanged.next(this.foodService.foodItems.slice());
  });
  }
  onAddIngredient() {
    (<FormArray>this.editFoodForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  editForm() {
    let imagePath: any;
    let name: any;
    let price: any;
    let deliveryTime: any;
    let category: any;
    let ingredientsArray = new FormArray([]);
    const foodItem = this.foodService.getFoodById(+this.id);
    imagePath = foodItem.imagePath;
    name = foodItem.name;
    price = foodItem.price;
    deliveryTime = foodItem.deliveryTime;
    category = foodItem.category;

    if (foodItem['ingredients']) {
      for (let ingredient of foodItem.ingredients) {
        ingredientsArray.push(new FormGroup({
          'name': new FormControl(ingredient.name, Validators.required),
          'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
        }))
      }
    }
    this.editFoodForm = new FormGroup({
      'imagePath': new FormControl(imagePath, Validators.required),
      'name': new FormControl(name, Validators.required),
      'ingredients': ingredientsArray,
      'deliveryTime': new FormControl(deliveryTime, Validators.required),
      'price': new FormControl(price, Validators.required),
      'category': new FormControl(category, Validators.required),
    })


  }


}
