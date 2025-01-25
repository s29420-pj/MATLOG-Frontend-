import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { CurrencyPipe, DatePipe, NgForOf, NgIf } from '@angular/common';

interface SchoolSubject {
  name: string;
}

interface Tutor {
  id: string;
  firstName: string;
  lastName: string;
  specializations: SchoolSubject[];
}

interface Lesson {
  id: string;
  startTime: string;
  endTime: string;
  price: number;
}

@Component({
  selector: 'app-find-tutor',
  templateUrl: './find-tutor.component.html',
  styleUrls: ['./find-tutor.component.css'],
  standalone: true,
  imports: [
    DatePipe,
    CurrencyPipe,
    NgIf,
    NgForOf,
    HttpClientModule,
  ]
})
export class FindTutorComponent implements OnInit {
  tutors: Tutor[] = [];
  selectedTutorId: string | null = null;
  availableLessons: Lesson[] = [];
  userId: string = '';
  userRole: string = '';
  token: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUserIdAndRoleFromToken();
    this.fetchTutors();
  }

  private getAuthHeaders(): HttpHeaders {
    if (!this.token) {
      console.error('Brak tokenu w localStorage!');
      alert('Twoja sesja wygasła. Zaloguj się ponownie.');
      throw new Error('Brak tokenu w localStorage');
    }
    return new HttpHeaders().set('Authorization', `Bearer ${this.token}`);
  }

  private getUserIdAndRoleFromToken(): void {
    this.token = localStorage.getItem('jwtToken');
    if (!this.token) {
      console.error('Brak tokenu w localStorage!');
      alert('Twoja sesja wygasła. Zaloguj się ponownie.');
      throw new Error('Brak tokenu w localStorage');
    }

    try {
      const decodedToken: any = jwt_decode(this.token);
      this.userId = decodedToken.id;
      this.userRole = decodedToken.roles.includes('TUTOR') ? 'TUTOR' : 'STUDENT';
      console.log('Token:', this.token);
      console.log('Rola użytkownika:', this.userRole);
      console.log('ID użytkownika:', this.userId);
    } catch (error) {
      console.error('Błąd podczas dekodowania tokena:', error);
      alert('Błąd autoryzacji. Spróbuj ponownie się zalogować.');
    }
  }

  fetchTutors(): void {
    this.http
      .get<Tutor[]>('http://localhost:8080/tutor/user/controller/get/tutors')
      .pipe(
        map(tutors =>
          tutors.map(tutor => ({
            id: tutor.id,
            firstName: tutor.firstName,
            lastName: tutor.lastName,
            specializations: tutor.specializations,
          }))
        )
      )
      .subscribe({
        next: data => {
          this.tutors = data;
        },
        error: err => {
          console.error('Błąd podczas pobierania tutorów:', err);
          alert('Nie udało się załadować listy korepetytorów. Spróbuj ponownie później.');
        },
      });
  }

  openProfileModal(tutorId: string): void {
    this.selectedTutorId = tutorId;
    this.fetchAvailableLessons(tutorId);
  }

  fetchAvailableLessons(tutorId: string): void {
    const headers = this.getAuthHeaders();
    this.http
      .get<Lesson[]>(`http://localhost:8080/private_lesson/tutor/get-all-available/${tutorId}`, { headers })
      .subscribe({
        next: data => {
          console.log('Dostępne lekcje:', data);
          this.availableLessons = data;
        },
        error: err => {
          console.error('Błąd podczas pobierania terminów:', err);
          alert('Nie udało się załadować dostępnych terminów. Spróbuj ponownie później.');
        },
      });
  }

  enrollLesson(lessonId: string): void {
    console.log('Próba rezerwacji lekcji o ID:', lessonId);

    const headers = this.getAuthHeaders();
    const body = {
      lessonId: lessonId,
      studentId: this.userId,
    };

    this.http.post('http://localhost:8080/private_lesson/book', body, { headers }).subscribe({
      next: () => {
        alert('Lekcja została pomyślnie zarezerwowana!');
        console.log('Lekcja zarezerwowana:', lessonId);
        this.fetchAvailableLessons(this.selectedTutorId!);
      },
      error: err => {
        console.error('Błąd podczas rezerwacji lekcji:', err);
        if (err.status === 403) {
          alert('Nie masz uprawnień do rezerwacji tej lekcji.');
        } else {
          alert('Nie udało się zarezerwować lekcji. Spróbuj ponownie później.');
        }
      },
    });
  }

  closeProfileModal(): void {
    this.selectedTutorId = null;
    this.availableLessons = [];
  }
}
