import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbCarouselModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motomart';

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
