import { Injectable } from '@angular/core';
import { RestaurantMenu } from 'src/app/restaurant-menu';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs'

const  httpOptions = {headers: new HttpHeaders({
  'Content-Type': 'application/json',
})
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  [x: string]: any;
  private apiUrl = "https://wiem-menu-1.herokuapp.com/api/restaurent/menu/"
  static id: any;

  constructor(private _http:HttpClient) { }

  getMenu():  Observable<RestaurantMenu[]>{
    return this._http.get<RestaurantMenu[]>(this.apiUrl)
  }
  deleteMenu(menu:RestaurantMenu): Observable<MenuService>{
    const url = `${this.apiUrl}${menu.id}/`;
    return this._http.delete<MenuService>(url);
  }

  addMenu(menu: RestaurantMenu): Observable<RestaurantMenu>{
    return this._http.post<RestaurantMenu>( this.apiUrl, menu, httpOptions);



  };
};