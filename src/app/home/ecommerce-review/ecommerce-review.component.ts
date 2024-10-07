import { Component } from '@angular/core';

@Component({
  selector: 'app-ecommerce-review',
  standalone: true,
  imports: [],
  templateUrl: './ecommerce-review.component.html',
  styleUrl: './ecommerce-review.component.css'
})
export class EcommerceReviewComponent {

  likes = 0;
  dislikes = 0;

  incrementLikes() {
    this.likes++;
  }

  decrementLikes() {
    this.dislikes++;
  }
}
