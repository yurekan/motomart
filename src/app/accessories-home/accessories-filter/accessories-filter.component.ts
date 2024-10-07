import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories-filter',
  standalone: true,
  imports: [],
  templateUrl: './accessories-filter.component.html',
  styleUrl: './accessories-filter.component.css'
})
export class AccessoriesFilterComponent {
  constructor(private router: Router){}

  openCategoryList(){
    this.router.navigate(['accessories/accessories-list']);
  }
}
