import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoryService } from '../../../service/accessory/accessory.service'; // Adjust the path
import { Accessory } from '../../../models/accessory.model'; // Adjust the path
import { AccessoryCategory } from '../../../models/accessory.model';// Adjust the path
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessories-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accessories-list.component.html',
  styleUrls: ['./accessories-list.component.css']
})
export class AccessoriesListComponent implements OnInit {
  accessories: Accessory[] = [];
  category?: AccessoryCategory;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accessoryService: AccessoryService // Inject the service
  ) {}

  ngOnInit() {
    // Get the category from the route parameters
    this.route.paramMap.subscribe(params => {
      const categoryParam = params.get('category');
      this.category = categoryParam as AccessoryCategory; // Type cast if needed

      // Fetch accessories based on the selected category
      this.fetchAccessories(this.category);
    });
  }

  fetchAccessories(category: AccessoryCategory) {
    this.accessoryService.getAccessoriesByCategory(category).subscribe({
      next: (data) => {
        this.accessories = data; // Set the accessories list
      },
      error: (err) => {
        console.error('Error fetching accessories:', err);
      }
    });
  }

  openProductPage(id: number){
    this.router.navigate(['home/accessories-page', id]);
  }
}
