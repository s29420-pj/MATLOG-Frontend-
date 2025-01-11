import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-dashboard',
  imports: [
    RouterOutlet, DashboardMenuComponent, NgForOf
  ],
  templateUrl: './user-dashboard.component.html',
  standalone: true,
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
