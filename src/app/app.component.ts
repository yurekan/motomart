import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Card {
  img: string;
  name: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgbCarouselModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'motomart';

  cards: Card[] = [
    { img: '../assets/Honda.webp', name: 'Honda' },
    { img: '../assets/TVS.webp', name: 'TVS' },
    { img: '../assets/royal_enfield.webp', name: 'Royal Enfield' },
    { img: '../assets/KTM.webp', name: 'KTM' },
    { img: '../assets/Yamaha.webp', name: 'Yamaha' },
    { img: '../assets/Bajaj.webp', name: 'Bajaj' },
    { img: '../assets/Suzuki.webp', name: 'Suzuki' },
    { img: '../assets/Kawasaki.webp', name: 'Kawasaki' }
  ];

  slides: Card[][] = [];

  currentIndex = 0;
  itemsPerPage = 4;

  get displayedCards() {
    return this.cards.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
  }

  next() {
    if (this.currentIndex < this.cards.length - this.itemsPerPage) {
      this.currentIndex++;
    }
  }

  previous() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
