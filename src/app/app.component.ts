import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  title = 'motomart';
}
