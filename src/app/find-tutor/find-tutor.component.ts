import { Component } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';

interface Tutor {
  id: string;
  name: string;
  subject: string;
  city: string;
  photo: string;
}

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css'],
  imports: [
    FormsModule,
    NgIf,
    NgForOf,
    NgOptimizedImage,
    HttpClientModule,
  ],
  standalone: true
})
export class FindTutorComponent {
  filters = {
    subject: '',
    city: '',
  };

  tutors: Tutor[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchTutors(); // Pobierz korepetytorów na start
  }

  fetchTutors(): void {
    const { subject, city } = this.filters;
    let query = `/api/tutors?subject=${subject}&city=${city}`;
    this.http.get<Tutor[]>(query).subscribe({
      next: (data) => (this.tutors = data),
      error: (err) => console.error('Błąd podczas pobierania korepetytorów:', err),
    });
  }

  onSearch(): void {
    this.fetchTutors(); // Wykonaj wyszukiwanie po kliknięciu "Szukaj"
  }

  enroll(tutorId: string): void {
    alert(`Zapisano na lekcję z korepetytorem ID: ${tutorId}`);
    // Możesz tu dodać logikę wysyłania zapisu do backendu
  }
}
