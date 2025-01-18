import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {DashboardMenuComponent} from './dashboard-menu/dashboard-menu.component';
import {NgForOf} from '@angular/common';

@Component({
  imports: [
    RouterOutlet, DashboardMenuComponent],
  selector: 'app-user-dashboard',
  standalone: true,
  styleUrl: './user-dashboard.component.css',
  templateUrl: './user-dashboard.component.html'
})
export class UserDashboardComponent {

}
