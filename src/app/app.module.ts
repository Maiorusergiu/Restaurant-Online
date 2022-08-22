import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/starter-module/about/about.component';
import { HomeComponent } from './features/starter-module/home/home.component';
import { HeaderComponent } from './features/starter-module/header/header.component';
import { FooterComponent } from './features/starter-module/footer/footer.component';
import { MenuComponent } from './features/authenticated-module/menu/menu.component';
import { CarouselComponent } from './features/starter-module/home/carousel/carousel.component';
import { LocationComponent } from './features/starter-module/location/location.component';
import { SpinnerLoaderComponent } from './shared/spinner-loader/spinner-loader.component';
import { LoginComponent } from './features/starter-module/login/login.component';
import { RegisterComponent } from './features/starter-module/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './features/authenticated-module/categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodItemComponent } from './features/authenticated-module/menu/food-item/food-item.component';
import { FoodItemManageComponent } from './features/admin-module/admin/admin-dashboard/food-item-manage/food-item-manage.component';
import { AdminDashboardComponent } from './features/admin-module/admin/admin-dashboard/admin-dashboard.component';
import { ManageFoodComponent } from './features/admin-module/admin/admin-dashboard/manage-food/manage-food.component';
import { AdminDashboardStartComponent } from './features/admin-module/admin/admin-dashboard-start/admin-dashboard-start.component';
import { ManageFoodDetailComponent } from './features/admin-module/admin/admin-dashboard/manage-food-detail/manage-food-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './features/authenticated-module/cart/cart.component';
import { FoodItemDetailComponent } from './features/authenticated-module/menu/food-item-detail/food-item-detail.component';
import { HamburgerComponent } from './features/authenticated-module/categories/food-categories/hamburger/hamburger.component';
import { SoupComponent } from './features/authenticated-module/categories/food-categories/soup/soup.component';
import { DrinkComponent } from './features/authenticated-module/categories/food-categories/drink/drink.component';
import { MeatComponent } from './features/authenticated-module/categories/food-categories/meat/meat.component';
import { SpagettiComponent } from './features/authenticated-module/categories/food-categories/spagetti/spagetti.component';
import { SaladComponent } from './features/authenticated-module/categories/food-categories/salad/salad.component';
import { DessertComponent } from './features/authenticated-module/categories/food-categories/dessert/dessert.component';
import { PizzaComponent } from './features/authenticated-module/categories/food-categories/pizza/pizza.component';
import { CategoriesStartComponent } from './features/authenticated-module/categories/categories-start/categories-start.component';
import { CheckoutPageComponent } from './features/authenticated-module/checkout-page/checkout-page.component';
import { ManageOrdersComponent } from './features/admin-module/admin/admin-dashboard/manage-orders/manage-orders.component';
import { PaymentComponent } from './features/authenticated-module/payment/payment.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    CarouselComponent,
    LocationComponent,
    SpinnerLoaderComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    FoodItemComponent,
    FoodItemManageComponent,
    AdminDashboardComponent,
    ManageFoodComponent,
    AdminDashboardStartComponent,
    ManageFoodDetailComponent,
    CartComponent,
    FoodItemDetailComponent,
    HamburgerComponent,
    SoupComponent,
    DrinkComponent,
    MeatComponent,
    SpagettiComponent,
    SaladComponent,
    DessertComponent,
    PizzaComponent,
    CategoriesStartComponent,
    CheckoutPageComponent,
    ManageOrdersComponent,
    PaymentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
