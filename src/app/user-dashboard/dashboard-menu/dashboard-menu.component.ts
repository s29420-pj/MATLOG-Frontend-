import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-dashboard-menu',
  standalone: true,
    imports: [
        RouterLink
    ],
  templateUrl: './dashboard-menu.component.html',
  styleUrl: './dashboard-menu.component.css'
})
export class DashboardMenuComponent {

}
