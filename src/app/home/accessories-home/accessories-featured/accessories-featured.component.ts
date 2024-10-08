import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories-featured',
  standalone: true,
  imports: [],
  templateUrl: './accessories-featured.component.html',
  styleUrl: './accessories-featured.component.css'
})
export class AccessoriesFeaturedComponent {
  constructor(private router: Router){}

  viewAccessory(){
    this.router.navigate(['home/accessories-page']);
  }
}
