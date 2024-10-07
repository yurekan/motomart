import { CommonModule, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-bike',
  standalone: true,
  imports: [FormsModule, CommonModule,NgFor],
  templateUrl: './view-bike.component.html',
  styleUrl: './view-bike.component.css'
})
export class ViewBikeComponent implements OnInit {
  // Sample bike data
  bike = {
    name: 'Speedster Pro',  // Bike name
    image: './assets/bike1.jpg',  // Image path
    price: 1500
  };

  // Available models and cities
  models: string[] = ['SP-2024', 'SP-2023', 'SP-2022', 'SP-2021', 'SP-2020'];
  cities: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  // Selected options for model and city
  selectedModel: string = '';
  selectedCity: string = '';

  // Active tab
  activeTab: string = 'specifications'; // Default tab

  // Specifications data
  specifications = {
    engineCapacity: '200cc',
    maxPower: '20hp',
    maxTorque: '15Nm',
    mileage: '50km/l',
    weight: '150kg',
    seatHeight: '800mm',
    frontSuspension: 'Telescopic',
    rearSuspension: 'Monoshock',
    overallLength: '2100mm'
  };

  // Features data
  features = {
    odometer: 'Digital',
    speedometer: 'Analog',
    fuelGauge: 'Yes'
  };

  constructor() {}

  ngOnInit(): void {
    // Initialize default selections if needed
    this.selectedModel = this.models[0];
    this.selectedCity = this.cities[0];
  }

  // Method to switch between tabs
  switchTab(tabName: string): void {
    this.activeTab = tabName;
    console.log(this.activeTab);
  }

  // Method to open EMI calculator page
  openEmiCalculator(): void {
    // Replace with actual navigation or modal logic
    window.open('https://www.your-emicalculator.com', '_blank');
  }
}