import { Component, OnInit } from '@angular/core';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']

})
export class AboutComponent implements OnInit {

  faCircleArrowLeft = faCircleArrowLeft;

  constructor() { }

  ngOnInit(): void {
  }

}
