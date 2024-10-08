import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';


interface Bike {
  id: number;
  name: string;
  model: string;
  price: number;
  ratings: number; // e.g., out of 5
  mileage: number; // km/l
  weight: number; // kg
  engineCapacity: number; // cc
  popularity: number;
  image: string; // URL or path to the bike image
}

@Component({
  selector: 'app-find-bikes',
  standalone: true,
  imports: [FormsModule, CommonModule,NgFor, RouterLink, RouterOutlet],
  templateUrl: './find-bikes.component.html',
  styleUrl: './find-bikes.component.css'
})


export class FindBikesComponent implements OnInit {
  // Sample bike data
  bikes: Bike[] = [
    {
      id: 1,
      name: 'Mountain Master',
      model: 'MM-2024',
      price: 1200,
      ratings: 4.5,
      mileage: 50,
      weight: 150,
      engineCapacity: 250,
      popularity: 80,
      image: './assets/bike1.jpg'
    },
    {
      id: 2,
      name: 'City Cruiser',
      model: 'CC-2024',
      price: 800,
      ratings: 4.0,
      mileage: 70,
      weight: 130,
      engineCapacity: 200,
      popularity: 65,
      image: './assets/bike1.jpg'
    },
    {
      id: 3,
      name: 'Speedster Pro',
      model: 'SP-2024',
      price: 1500,
      ratings: 4.8,
      mileage: 40,
      weight: 160,
      engineCapacity: 300,
      popularity: 90,
      image: './assets/bike1.jpg'
    },
    {
      id: 4,
      name: 'Eco Rider',
      model: 'ER-2024',
      price: 950,
      ratings: 4.2,
      mileage: 60,
      weight: 140,
      engineCapacity: 220,
      popularity: 75,
      image: './assets/bike1.jpg'
    },
    {
      id: 5,
      name: 'Trail Blazer',
      model: 'TB-2024',
      price: 1300,
      ratings: 4.6,
      mileage: 55,
      weight: 155,
      engineCapacity: 280,
      popularity: 85,
      image: './assets/bike1.jpg'
    },
    // Add more bikes as needed
  ];

  // Properties for sorting and filtering
  sortOption: string = 'asc'; // Default sort ascending
  filterOption: string = 'all'; // Default no filter

  // Filtered and sorted bikes to display
  displayedBikes: Bike[] = [];

  constructor() {}

  ngOnInit(): void {
    this.applyFiltersAndSort();
  }

  // Method to apply sorting and filtering
  applyFiltersAndSort(): void {
    let filtered = [...this.bikes];

    // Apply filtering based on filterOption
    switch (this.filterOption) {
      case 'priceAsc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'mileageAsc':
        filtered.sort((a, b) => a.mileage - b.mileage);
        break;
      case 'mileageDesc':
        filtered.sort((a, b) => b.mileage - a.mileage);
        break;
      case 'popularity':
        filtered.sort((a, b) => b.popularity - a.popularity); // Descending
        break;
      default:
        break;
    }

    // Apply sorting based on sortOption (price)
    if (this.sortOption === 'asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    this.displayedBikes = filtered;
  }

  // Handlers for dropdown changes
  onSortChange(): void {
    this.applyFiltersAndSort();
  }

  onFilterChange(): void {
    this.applyFiltersAndSort();
  }
}