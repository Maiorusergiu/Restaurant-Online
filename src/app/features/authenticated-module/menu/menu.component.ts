import { Component, OnInit } from '@angular/core';
import { FoodItem } from '../../../models/food.model';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  user: User;
  constructor(private authService: AuthService, private foodService: FoodService) {
    this.authService.user.subscribe(response => this.user = response);
  }

  ngOnInit(): void {

  }

}
