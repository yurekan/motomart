import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-start-home',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './start-home.component.html',
  styleUrl: './start-home.component.css'
})
export class StartHomeComponent {

}
