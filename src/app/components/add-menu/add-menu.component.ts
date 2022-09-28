import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantMenu } from 'src/app/restaurant-menu';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {
  @Output() onAddMenu: EventEmitter<RestaurantMenu> = new EventEmitter();
  name!: string;
  description!: string;
  price!: number;
  created!: string;
  

  constructor() { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    if (!this.name) {
      alert('Please enter a Menu name');
        return;
    }else if (!this.description) {
      alert('Please enter a Description');
      return;
  }else if (!this.price || this.price < 0 ) {  
    alert('Please enter a Price');
      return;
}

  const newTask:RestaurantMenu ={
    name: this.name,
    description: this.description,
    price: this.price,
    created: this.created,
  }





  this.onAddMenu.emit(newTask);
  this.name = '';
  this.description = '';
  this.price = 0;
  this.created = '';

}
}

