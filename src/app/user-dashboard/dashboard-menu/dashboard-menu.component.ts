import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';

@Component({
    selector: 'app-dashboard-menu',
    imports: [
        RouterLink,
      HttpClientModule,
    ],
    templateUrl: './dashboard-menu.component.html',
    standalone: true,
    styleUrl: './dashboard-menu.component.css'
})
export class DashboardMenuComponent {

}
