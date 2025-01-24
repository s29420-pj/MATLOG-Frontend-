import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { NgIf } from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  standalone: true,
  imports: [
    NgIf,
    HttpClientModule,
    RouterLink,
  ]
})
export class DashboardHomeComponent implements OnInit {
  userName = ''; // Imię i nazwisko użytkownika
  userRole = ''; // Główna rola użytkownika ('TUTOR' lub 'STUDENT')

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    const token = localStorage.getItem('jwtToken'); // Pobranie tokena z localStorage

    if (token) {
      const decodedToken: any = jwt_decode(token);
      console.log('Decoded Token:', decodedToken);

      this.userName = `${decodedToken.firstName} ${decodedToken.lastName}`; // Przypisanie imienia i nazwiska

      // Sprawdzenie, czy w rolach jest 'TUTOR'
      if (decodedToken.roles && decodedToken.roles.includes('TUTOR')) {
        this.userRole = 'TUTOR';
      } else {
        this.userRole = 'STUDENT';
      }
    } else {
      console.error('Token nie znaleziony w localStorage!');
    }
  }
}
