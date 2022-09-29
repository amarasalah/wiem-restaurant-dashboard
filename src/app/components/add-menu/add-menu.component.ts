import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RestaurantMenu } from 'src/app/restaurant-menu';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

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
  updated!: string;
  showAddMenu!: boolean;
  subscription: Subscription;
  

  constructor(private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddMenu= value);
  }

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
    updated: this.updated
  }





  this.onAddMenu.emit(newTask);
  this.name = '';
  this.description = '';
  this.price = 0;
  this.created = '';

}
}

