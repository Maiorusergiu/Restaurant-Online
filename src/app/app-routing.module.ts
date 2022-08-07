import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminDashboardStartComponent } from './admin/admin-dashboard-start/admin-dashboard-start.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageFoodDetailComponent } from './admin/admin-dashboard/manage-food-detail/manage-food-detail.component';
import { ManageFoodComponent } from './admin/admin-dashboard/manage-food/manage-food.component';
import { CartComponent } from './cart/cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FoodItemDetailComponent } from './menu/food-item-detail/food-item-detail.component';
import { RegisterComponent } from './register/register.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { FoodItemResolver } from './services/foodItem.resolver';
import { RegisterAndLoginGuard } from './services/register.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent, canActivate: [RegisterAndLoginGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [RegisterAndLoginGuard] },

  {
    path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AdminGuard], children: [
      { path: '', component: AdminDashboardStartComponent },

      { path: 'manage-food', component: ManageFoodComponent },
      { path: ':id', component: ManageFoodDetailComponent, },
      //manage food
      //manage orders
    ]
  },
  {
    path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard], children: [


    ]
  },
  { path: 'food-details/:id', component: FoodItemDetailComponent, },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
