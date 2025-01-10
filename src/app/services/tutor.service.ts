import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';

export interface Tutor {
  name: string;
  specialization: string;
  level: string;
  price: string;
  image: string;
}

@Injectable({
  providedIn: 'root', // Rejestracja serwisu w globalnym injectorze
})
export class TutorService {
  private tutorsUrl = '/assets/data/tutors.json'; // Ścieżka do pliku JSON

  constructor(private http: HttpClient) {}

  getTutors(): Observable<Tutor[]> {
    console.log('Pobieranie danych z:', this.tutorsUrl);
    return this.http.get<Tutor[]>(this.tutorsUrl).pipe(
      tap((data) => console.log('Dane pobrane:', data)),
      catchError((error) => {
        console.error('Błąd podczas pobierania danych:', error);
        return throwError(() => new Error('Błąd podczas pobierania danych'));
      })
    );
  }

}
