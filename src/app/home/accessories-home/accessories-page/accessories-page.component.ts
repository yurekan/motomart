import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccessoryService } from '../../../service/accessory/accessory.service';
import { Accessory } from '../../../models/accessory.model';
import { ShoppingCartService } from '../../../service/shopping-cart.service';
import { CartItem } from '../../../models/cart-item.model';

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
  id?: number;
  accessory: Accessory = new Accessory();

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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cartService: ShoppingCartService,
    private accessoryService: AccessoryService // Inject the service
  ) {}

  ngOnInit() {
    // Get the category from the route parameters
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id') || 0;
      this.id = idParam as number; // Type cast if needed
      // Fetch accessories based on the selected category
      this.fetchAccessories(this.id);
    });
  }

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
    this.cartService.addToCart({
      productId: this.accessory.accessoryId || 0, 
      name: this.accessory.name || '',
      price: this.accessory.price || 0,
      quantity: this.quantity
    });
    this.quantity = 1;
  }

  fetchAccessories(id: number) {
    this.accessoryService.getAccessoryById(id).subscribe({
      next: (data) => {
        this.accessory = data; // Set the accessories list
        const count = this.accessory.visitCount || 0;
        this.accessory.visitCount = count + 1;
        this.accessoryService.updateAccessory(id, this.accessory);
      },
      error: (err) => {
        console.error('Error fetching accessories:', err);
      }
    });
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
