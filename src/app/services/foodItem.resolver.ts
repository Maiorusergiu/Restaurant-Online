import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FoodItem } from "../models/food.model";
import { FoodService } from "./food.service";

@Injectable({ providedIn: 'root' })
export class FoodItemResolver implements Resolve<FoodItem>{
    id: number;
    constructor(private foodService: FoodService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): FoodItem | Observable<FoodItem> | Promise<FoodItem> {
        return;

    }

}