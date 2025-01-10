import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, DashboardMenuComponent
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
