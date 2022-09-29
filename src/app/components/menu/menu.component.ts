import { Component, OnInit, } from '@angular/core';
import { timer } from 'rxjs';
import { RestaurantMenu } from 'src/app/restaurant-menu';
import { MenuService } from 'src/app/services/menu.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
 
  menus : RestaurantMenu[] = [];
  menu: any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe((data)=>this.menus = data);
  }
  deleteMenu(menu:RestaurantMenu){
    this.menuService.deleteMenu(menu).subscribe(()=> (this.menus = this.menus.filter(m => m.id !== menu.id)));
  }
  addMenu(menu:RestaurantMenu){
  
    this.menuService
    .addMenu(menu)
    .subscribe(
      (menu)=>(this.menus.push(menu)));
    

  }



  }



