import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
interface Lesson {
  id: string;
  subject: string;
  teacher: string;
  date: string;
  duration: number;
}
@Component({
  selector: 'app-lessons',
  imports: [
    DatePipe,
    NgForOf,
    NgIf
  ],
  templateUrl: "./lessons.component.html",
  standalone: true,
  styleUrl: './lessons.component.css'
})
export class LessonsComponent implements OnInit{
  lessons: Lesson[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchLessons();
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
}

