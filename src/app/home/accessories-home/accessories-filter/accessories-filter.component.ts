import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessoryCategory } from '../../../models/accessory.model'; // Ensure this path is correct

@Component({
  selector: 'app-accessories-filter',
  standalone: true,
  imports: [], // Add necessary modules if required
  templateUrl: './accessories-filter.component.html',
  styleUrls: ['./accessories-filter.component.css']
})
export class AccessoriesFilterComponent {
  AccessoryCategory = AccessoryCategory; // Expose the enum to the template

  constructor(private router: Router) {}

  openCategoryList(category: AccessoryCategory) {
    this.router.navigate(['home/accessories-list', category]);
  }
}
