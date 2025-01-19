import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import { Lesson } from '../../models/lesson.model'; // Import interfejsu

@Component({
  selector: 'app-lessons',
  imports: [
    DatePipe,
    NgForOf,
    NgIf,
    RouterLink,
    HttpClientModule,
  ],
  templateUrl: "./lessons.component.html",
  standalone: true,
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit{
  lessons: Lesson[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
     this.fetchLessons();
    // Przykładowe dane
    // this.lessons = [
    //   {
    //     id: '1',
    //     subject: 'Matematyka',
    //     teacher: 'Jan Kowalski',
    //     date: new Date().toISOString(),
    //     duration: 60,
    //   },
    //   {
    //     id: '2',
    //     subject: 'Fizyka',
    //     teacher: 'Anna Nowak',
    //     date: new Date(new Date().getTime() + 3600000).toISOString(), // za godzinę
    //     duration: 90,
    //   },
    //   {
    //     id: '3',
    //     subject: 'Chemia',
    //     teacher: 'Katarzyna Wiśniewska',
    //     date: new Date(new Date().getTime() + 7200000).toISOString(), // za dwie godziny
    //     duration: 120,
    //   },
    //];
  }

  fetchLessons(): void {
    this.http.get<Lesson[]>('/api/lessons').subscribe({
      next: (data) => (this.lessons = data),
      error: (err) => console.error('Błąd podczas pobierania lekcji:', err),
    });
  }

  cancelLesson(id: string): void {
    this.http.delete(`/api/lessons/${id}`).subscribe({
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

