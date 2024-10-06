import { Component } from '@angular/core';
import { AccessoriesFeaturedComponent } from "../accessories-featured/accessories-featured.component";

@Component({
  selector: 'app-accessories-list',
  standalone: true,
  imports: [AccessoriesFeaturedComponent],
  templateUrl: './accessories-list.component.html',
  styleUrl: './accessories-list.component.css'
})
export class AccessoriesListComponent {

}
