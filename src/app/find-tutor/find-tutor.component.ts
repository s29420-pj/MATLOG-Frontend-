import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf, NgOptimizedImage} from '@angular/common';
import {map} from 'rxjs/operators';

interface SchoolSubject {
  name: string;
}

interface Tutor {
  id: string;
  firstName: string;
  lastName: string;
  specializations: SchoolSubject[];
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
    this.fetchTutors();

  }

  fetchTutors(): void {
    this.http
    .get<Tutor[]>('http://localhost:8080/tutor/user/controller/get/tutors')
      .pipe(
        map(tutors => tutors.map(tutor => ({
            id: tutor.id,
            firstName: tutor.firstName,
            lastName: tutor.lastName,
            specializations: tutor.specializations,
        })))
      )
      .subscribe({
        next: (data) => {
          this.tutors = data;
        },
        error: (err) => console.error(),
      });
  }

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
