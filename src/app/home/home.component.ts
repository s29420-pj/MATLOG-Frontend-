import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [
    RouterLink,HttpClientModule,
  ],
  standalone: true
})
export class HomeComponent {

}
