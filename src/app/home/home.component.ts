import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    RouterLink
  ],
  standalone: true
})
export class HomeComponent {

}
