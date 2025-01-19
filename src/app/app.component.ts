import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MainMenuComponent } from './home/main-menu/main-menu.component';
import {CommonModule} from '@angular/common';
import {DashboardMenuComponent} from './user-dashboard/dashboard-menu/dashboard-menu.component';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MainMenuComponent, CommonModule, DashboardMenuComponent, RouterLink, HttpClientModule],
  styleUrls: ['./app.component.css'],
  standalone: true,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    initFlowbite();
  }

  isDashboardRoute(): boolean {
    console.log('Current URL:', this.router.url);
    return this.router.url.startsWith('/dashboard');
  }

  isAuthRoute(): boolean {
    console.log('Current URL:', this.router.url);
    return this.router.url.startsWith('/auth');
  }

  logout() {
    const confirmed = confirm('Czy na pewno chcesz się wylogować?');

    if (confirmed) {
      console.log('Użytkownik został wylogowany');
      //dodac backend z wylogowaniem i usunieciem id / tokenu itd

      this.router.navigate(['/']);
    }
  }
}
