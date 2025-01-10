import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [
    RouterOutlet, DashboardMenuComponent, NgForOf
  ],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
