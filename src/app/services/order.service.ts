import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Order } from "../models/order.model";

@Injectable({providedIn: 'root'})
export class OrderService {
    orders: Order[];
    orderSubjectArray = new Subject<Order[]>();
    private apiURL = "https://tasty-food-oradea-default-rtdb.firebaseio.com/order";
    constructor(private http: HttpClient) {

    }
    
    
    public createOrder(order: Order) {

        return this.http.put<Order>(`${this.apiURL}.json`, order);
    }
    public getOrders() {
        return this.http.get<Order[]>(`${this.apiURL}.json`);
    }
    public getCurrentOrder() {
        return this.http.get<Order>(`${this.apiURL}.json`);
    }
    public deleteOrder(){
        return this.http.delete(`${this.apiURL}.json`);
        
    }
    public updateOrder(id: number, newOrder: Order){
        return this.http.put(`${this.apiURL}/${id}.json`, newOrder);
    }

}