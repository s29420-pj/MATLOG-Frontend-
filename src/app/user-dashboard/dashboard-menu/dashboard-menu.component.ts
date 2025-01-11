import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-dashboard-menu',
    imports: [
        RouterLink
    ],
    templateUrl: './dashboard-menu.component.html',
    standalone: true,
    styleUrl: './dashboard-menu.component.css'
})
export class DashboardMenuComponent {

}
