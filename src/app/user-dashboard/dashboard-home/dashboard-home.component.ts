import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css'],
  standalone: true,
  imports: [
    NgIf,
    HttpClientModule,
  ]
})
export class DashboardHomeComponent implements OnInit {
  userName = 'Jan Kowalski'; // Tymczasowe dane, można zastąpić danymi z backendu
  userRole = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    // Pobierz token z localStorage lub innego miejsca
    const token = localStorage.getItem('jwtToken');

    if (token) {

      // Dekoduj token JWT, aby uzyskać informacje o użytkowniku
      const decodedToken: any = jwt_decode(token);
      console.log(decodedToken); // Debugowanie zawartości tokena

      this.userName = decodedToken.firstName + ' ' + decodedToken.lastName;
      this.userRole = decodedToken.role;
    }
  }
}
