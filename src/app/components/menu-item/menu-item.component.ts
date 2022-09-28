import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RestaurantMenu } from 'src/app/restaurant-menu';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menu!: RestaurantMenu;
  @Output() OnDeleteMenu: EventEmitter<RestaurantMenu> = new EventEmitter();
   


  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  
  }
  onDelete(menu : RestaurantMenu){
    this.OnDeleteMenu.emit(menu);
  }


}
