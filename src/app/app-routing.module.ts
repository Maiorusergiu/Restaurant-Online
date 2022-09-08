import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './features/starter-module/pages/about/about.component';
import { AdminDashboardStartComponent } from './features/admin-module/admin/admin-dashboard-start/admin-dashboard-start.component';
import { AdminDashboardComponent } from './features/admin-module/admin/admin-dashboard/admin-dashboard.component';
import { ManageFoodDetailComponent } from './features/admin-module/admin/admin-dashboard/manage-food-detail/manage-food-detail.component';
import { ManageFoodComponent } from './features/admin-module/admin/admin-dashboard/manage-food/manage-food.component';
import { ManageOrdersComponent } from './features/admin-module/admin/admin-dashboard/manage-orders/manage-orders.component';
import { CartComponent } from './features/authenticated-module/cart/cart.component';
import { CategoriesStartComponent } from './features/authenticated-module/categories/categories-start/categories-start.component';
import { CategoriesComponent } from './features/authenticated-module/categories/categories.component';
import { DessertComponent } from './features/authenticated-module/categories/food-categories/dessert/dessert.component';
import { DrinkComponent } from './features/authenticated-module/categories/food-categories/drink/drink.component';
import { HamburgerComponent } from './features/authenticated-module/categories/food-categories/hamburger/hamburger.component';
import { MeatComponent } from './features/authenticated-module/categories/food-categories/meat/meat.component';
import { PizzaComponent } from './features/authenticated-module/categories/food-categories/pizza/pizza.component';
import { SaladComponent } from './features/authenticated-module/categories/food-categories/salad/salad.component';
import { SoupComponent } from './features/authenticated-module/categories/food-categories/soup/soup.component';
import { SpagettiComponent } from './features/authenticated-module/categories/food-categories/spagetti/spagetti.component';
import { CheckoutPageComponent } from './features/authenticated-module/checkout-page/checkout-page.component';
import { HomeComponent } from './features/starter-module/pages/home/home.component';
import { LoginComponent } from './features/starter-module/pages/login/login.component';
import { FoodItemDetailComponent } from './features/authenticated-module/menu/food-item-detail/food-item-detail.component';
import { PaymentComponent } from './features/authenticated-module/payment/payment.component';
import { RegisterComponent } from './features/starter-module/pages/register/register.component';
import { AdminGuard } from './services/admin.guard';
import { AuthGuard } from './services/auth.guard';
import { CheckoutGuard } from './services/checkout.guard';
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
      { path: 'manage-orders', component: ManageOrdersComponent},
      { path: ':id', component: ManageFoodDetailComponent, },
    ]
  },
  {path: 'checkout', component: CheckoutPageComponent, canActivate: [CheckoutGuard, AuthGuard]},


  {
    path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard], children: [
      {path: '', component: CategoriesStartComponent},
      {path: 'soup', component: SoupComponent},
      {path: 'hamburger', component: HamburgerComponent},
      {path: 'meat', component: MeatComponent},
      {path: 'spagetti', component: SpagettiComponent},
      {path: 'salad', component: SaladComponent},
      {path: 'dessert', component: DessertComponent},
      {path: 'pizza', component: PizzaComponent},
      {path: 'drink', component: DrinkComponent},
    ]
  },
  { path: 'food-details/:id', component: FoodItemDetailComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
