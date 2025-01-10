import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard-home',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './dashboard-home.component.html',
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  courses = [
    {
      title: 'Learning Swift Applications',
      author: '@dianneed',
      duration: '82 min',
      image: 'https://via.placeholder.com/300x150',
    },
    {
      title: 'Thematic Illustration Tips',
      author: '@dianneed',
      duration: '90 min',
      image: 'https://via.placeholder.com/300x150',
    },
  ];
}
