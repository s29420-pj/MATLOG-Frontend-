import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { MainMenuComponent } from './home/main-menu/main-menu.component';
import {CommonModule} from '@angular/common';
import {DashboardMenuComponent} from './user-dashboard/dashboard-menu/dashboard-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainMenuComponent, CommonModule, DashboardMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

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



}
