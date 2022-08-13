import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { LocationComponent } from './location/location.component';
import { SpinnerLoaderComponent } from './shared/spinner-loader/spinner-loader.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FoodItemComponent } from './menu/food-item/food-item.component';
import { FoodItemManageComponent } from './admin/admin-dashboard/food-item-manage/food-item-manage.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ManageFoodComponent } from './admin/admin-dashboard/manage-food/manage-food.component';
import { AdminDashboardStartComponent } from './admin/admin-dashboard-start/admin-dashboard-start.component';
import { ManageFoodDetailComponent } from './admin/admin-dashboard/manage-food-detail/manage-food-detail.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CartComponent } from './cart/cart.component';
import { FoodItemDetailComponent } from './menu/food-item-detail/food-item-detail.component';
import { HamburgerComponent } from './categories/food-categories/hamburger/hamburger.component';
import { SoupComponent } from './categories/food-categories/soup/soup.component';
import { DrinkComponent } from './categories/food-categories/drink/drink.component';
import { MeatComponent } from './categories/food-categories/meat/meat.component';
import { SpagettiComponent } from './categories/food-categories/spagetti/spagetti.component';
import { SaladComponent } from './categories/food-categories/salad/salad.component';
import { DessertComponent } from './categories/food-categories/dessert/dessert.component';
import { PizzaComponent } from './categories/food-categories/pizza/pizza.component';
import { CategoriesStartComponent } from './categories/categories-start/categories-start.component';


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
