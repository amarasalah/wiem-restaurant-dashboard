import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Our Menu Today';
  showAddMenu:boolean = false;
  subscription!: Subscription;


  
  
  constructor(private uiService: UiService, private router: Router) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddMenu= value);
  }

  ngOnInit(): void {
  }
  toggleAddText(){
    this.uiService.toggleAddMenu();
  }
  hasRoute(router:string){
    return this.router.url === router;
  }

}
