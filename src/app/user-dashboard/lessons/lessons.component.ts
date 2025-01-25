import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DatePipe, NgForOf, NgIf, CurrencyPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { Lesson } from '../../models/lesson.model';

@Component({
  selector: 'app-lessons',
  imports: [
    DatePipe,
    CurrencyPipe,
    NgForOf,
    NgIf,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: './lessons.component.html',
  standalone: true,
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit {
  lessons: Lesson[] = [];
  userRole: string = ''; // Rola użytkownika (TUTOR lub STUDENT)
  userId: string = ''; // ID użytkownika (z tokena JWT)

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    if (this.getUserInfoFromToken()) {
      this.fetchLessons();
    }
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error('Brak tokenu w localStorage!');
      this.router.navigate(['/auth/login']);
      throw new Error('Brak tokenu w localStorage');
    }
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  private getUserInfoFromToken(): boolean {
    const token = localStorage.getItem('jwtToken');
    if (!token) {
      console.error('Brak tokenu w localStorage!');
      this.router.navigate(['/auth/login']);
      return false;
    }

    try {
      const decodedToken: any = jwt_decode(token);
      this.userRole = decodedToken.roles.includes('TUTOR') ? 'TUTOR' : 'STUDENT';
      this.userId = decodedToken.id;
      return true;
    } catch (error) {
      console.error('Błąd podczas dekodowania tokena:', error);
      this.router.navigate(['/auth/login']);
      return false;
    }
  }

  fetchLessons(): void {
    const headers = this.getAuthHeaders();
    const url =
      this.userRole === 'TUTOR'
        ? `http://localhost:8080/private_lesson/tutor/get-all/${this.userId}`
        : `http://localhost:8080/private_lesson/student/get-all/${this.userId}`;

    this.http.get<Lesson[]>(url, { headers }).subscribe({
      next: (data) => (this.lessons = data),
      error: (err) => console.error('Błąd podczas pobierania lekcji:', err),
    });
  }

  cancelLesson(id: string): void {
    const headers = this.getAuthHeaders();
    const payload = { lessonId: id }; // Oczekiwany obiekt przez backend
    this.http.put('http://localhost:8080/private_lesson/cancel', payload, { headers }).subscribe({
      next: () => {
        this.lessons = this.lessons.filter((lesson) => lesson.id !== id);
        alert('Lekcja została anulowana.');
      },
      error: (err) => console.error('Błąd podczas anulowania lekcji:', err),
    });
  }

  goToFindLessons(): void {
    this.router.navigate(['/dashboard/znajdz-lekcje']); // Dostosuj ścieżkę do odpowiedniego widoku
  }
}
