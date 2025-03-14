import { Component, OnInit } from '@angular/core';
import { Lesson } from '../../models/lesson.model';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http'; // Wspólny interfejs

@Component({
  selector: 'app-lesson-history',
  templateUrl: './lesson-history.component.html',
  styleUrls: ['./lesson-history.component.css'],
  imports: [
    NgForOf,
    DatePipe,
    NgIf,
    HttpClientModule,
  ],
  standalone: true
})
export class LessonHistoryComponent implements OnInit {
  lessons: Lesson[] = []; // Lista lekcji

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLessonHistory();
  }

  fetchLessonHistory(): void {
    this.http.get<Lesson[]>('/api/lesson-history').subscribe({
      next: (data) => {
        this.lessons = data; // Przypisanie danych z API
      },
      error: (err) =>
        console.error('Błąd podczas pobierania historii lekcji:', err),
    });
  }
}
