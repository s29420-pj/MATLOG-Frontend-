import { Component } from '@angular/core';
import {DashboardMenuComponent} from '../dashboard-menu/dashboard-menu.component';
import {UserDashboardComponent} from '../user-dashboard.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports:[
    DashboardMenuComponent, UserDashboardComponent,
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

}
