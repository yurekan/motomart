import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingCartService } from '../../service/shopping-cart.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AccessoriesFilterComponent } from "./accessories-filter/accessories-filter.component";
import { AccessoriesFeaturedComponent } from "./accessories-featured/accessories-featured.component";

@Component({
  selector: 'app-accessories-home',
  standalone: true,
  imports: [NgbCarouselModule, CommonModule, AccessoriesFilterComponent, AccessoriesFeaturedComponent],
  templateUrl: './accessories-home.component.html',
  styleUrl: './accessories-home.component.css'
})
export class AccessoriesHomeComponent {
  
  constructor(public shoppingCartService: ShoppingCartService){}

  @ViewChild('carousel', { static: true }) carousel!: ElementRef;

  products = [
    { name: 'Honda', image: '../assets/Honda.webp' },
    { name: 'TVS', image: '../assets/TVS.webp' },
    { name: 'Royal Enfield', image: '../assets/royal_enfield.webp' },
    { name: 'KTM', image: '../assets/KTM.webp' },
    { name: 'Suzuki', image: '../assets/suzuki.webp' },
    { name: 'Yamaha', image: '../assets/yamaha.webp' },
    { name: 'Ducati', image: '../assets/ducati.webp' },
    { name: 'BMW', image: '../assets/bmw.webp' },
  ];

  scrollLeft() {
    const cardWidth = this.carousel.nativeElement.querySelector('.product-carousel-card').offsetWidth;
    this.carousel.nativeElement.scrollBy({ left: -cardWidth, behavior: 'smooth' });
  }

  scrollRight() {
    const cardWidth = this.carousel.nativeElement.querySelector('.product-carousel-card').offsetWidth;
    this.carousel.nativeElement.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}
