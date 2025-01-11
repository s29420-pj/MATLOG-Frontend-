import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-dashboard-home',
  imports: [
    NgForOf
  ],
  templateUrl: './dashboard-home.component.html',
  standalone: true,
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent {
  courses = [
    {
      title: 'Algebra',
      author: '@JanKowalski',
      duration: '82 min',
      image: '../../assets/algebra.avif',
    },
    {
      title: 'Trygonometria',
      author: '@AnnaNowak',
      duration: '90 min',
      image: '../../assets/trygonometria.jpg',
    },
  ];
}
