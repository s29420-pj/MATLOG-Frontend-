import { Component, OnInit } from '@angular/core';
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
    HttpClientModule,
    NgOptimizedImage,
  ],
  standalone: true
})
export class FindTutorComponent implements OnInit {
  filters = {
    subject: '',
    city: '',
  };

  tutors: Tutor[] = [];
  isLoggedIn = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    //this.fetchTutors(); // Pobierz korepetytorów na start
    this.tutors=[
      {
        "id": "1",
        "name": "Jan Kowalski",
        "subject": "Matematyka",
        "city": "Warszawa",
        "photo": "https://via.placeholder.com/150"
      },
      {
        "id": "2",
        "name": "Anna Nowak",
        "subject": "Fizyka",
        "city": "Kraków",
        "photo": "https://via.placeholder.com/150"
      },
      {
        "id": "3",
        "name": "Piotr Zieliński",
        "subject": "Chemia",
        "city": "Gdańsk",
        "photo": "https://via.placeholder.com/150"
      }
    ]

  }

  // fetchTutors(): void {
  //   const { subject, city } = this.filters;
  //   let query = `/api/tutors?subject=${subject}&city=${city}`;
  //   this.http.get<Tutor[]>(query).subscribe({
  //     next: (data) => (this.tutors = data),
  //     error: (err) => console.error('Błąd podczas pobierania korepetytorów:', err),
  //   });
  // }

  // onSearch(): void {
  //   this.fetchTutors(); // Wykonaj wyszukiwanie po kliknięciu "Szukaj"
  // }


  enroll(tutorId: string): void {
    if (this.isLoggedIn) {
      alert(`Zapisano na lekcję z korepetytorem ID: ${tutorId}`);
    } else {
      alert('Musisz być zalogowany, aby zapisać się na lekcję.');
    }
  }
}
