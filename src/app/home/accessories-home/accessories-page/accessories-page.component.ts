import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-accessories-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './accessories-page.component.html',
  styleUrl: './accessories-page.component.css'
})
export class AccessoriesPageComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  quantity: number = 1; // Default quantity
  currentImage: string = '../assets/pic1.jpg'; // Default image

  images: string[] = [
    '../assets/pic1.jpg',
    '../assets/slide1.jpg',
    '../assets/slide2.jpg',
    '../assets/pic1.jpg',
    '../assets/slide1.jpg',
    '../assets/slide2.jpg',
    '../assets/slide2.jpg',
    '../assets/pic1.jpg',
    '../assets/slide1.jpg',
    '../assets/slide2.jpg'
  ];

  changeImage(image: string) {
    this.currentImage = image; // Change the main image
  }

  increaseCount() {
    this.quantity++;
  }

  decreaseCount() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart() {
    console.log("Add to cart button clicked"); // Check if this line executes
    alert(`Added ${this.quantity} item(s) to the cart!`);
  }

  ngAfterViewInit() {
    const scrollContainer = this.scrollContainer.nativeElement;

    scrollContainer.addEventListener('wheel', (evt: WheelEvent) => {
      evt.preventDefault();
      scrollContainer.scrollLeft += evt.deltaY;
    });

    document.getElementById('nextBtn')!.addEventListener('click', () => {
      scrollContainer.scrollLeft += 80; // Scroll right
    });

    document.getElementById('backBtn')!.addEventListener('click', () => {
      scrollContainer.scrollLeft -= 80; // Scroll left
    });
  }
  
 boxes = [
  { 
    title: 'Shipping', 
    content: 'Fast and reliable shipping.', 
    image: 'assets/free.jpg', // Update with your image path
    color: '#FFDDC1' 
  },
  { 
    title: 'Support', 
    content: '24/7 customer support.', 
    image: 'assets/service.jpg', // Update with your image path
    color: '#FFABAB' 
  },
  { 
    title: 'Money Back Guarantee', 
    content: '30-day money back guarantee.', 
    image: 'assets/cashback.jpg', // Update with your image path
    color: '#FFC3A0' 
  },
  { 
    title: 'Secure Payment', 
    content: 'Your payment information is safe with us.', 
    image: 'assets/secure.jpg', // Update with your image path
    color: '#D5AAFF' 
  }
];
}
