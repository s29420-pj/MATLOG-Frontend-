import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-dashboard-home',
  imports: [
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './dashboard-home.component.html',
  standalone: true,
  styleUrl: './dashboard-home.component.css'
})
export class DashboardHomeComponent implements OnInit{
  userName = 'Jan Kowalski'; // Tymczasowe dane, można zastąpić danymi z backendu



  ngOnInit(): void {
    // Jeśli chcesz dynamicznie załadować dane użytkownika, możesz to zrobić tutaj
    this.loadUserData();
  }

  loadUserData(): void {
    // Przykład: Załaduj dane użytkownika z backendu, jeśli są dostępne
    // Możesz użyć serwisu HTTP, jeśli dane są dynamiczne
    // this.userService.getUserData().subscribe(data => {
    //   this.userName = data.name;
    // });
  }
}
