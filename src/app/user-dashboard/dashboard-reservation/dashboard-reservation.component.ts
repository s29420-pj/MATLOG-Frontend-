import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-dashboard-reservation',
  templateUrl: './dashboard-reservation.component.html',
  styleUrls: ['./dashboard-reservation.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardReservationComponent implements OnInit {
  reservationForm!: FormGroup;
  tutorId!: string | null; // ID korepetytora pobierane z tokena

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tutorId = this.getTutorIdFromToken(); // Pobierz tutorId z tokena
    if (!this.tutorId) {
      alert('Nie udało się pobrać identyfikatora użytkownika. Zaloguj się ponownie.');
      this.router.navigate(['/auth/login']);
      return;
    }

    this.initializeForm();
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

  private getTutorIdFromToken(): string | null {
    const token = localStorage.getItem('jwtToken');
    if (!token) return null;
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id || null; // Zwróć tutorId z tokena
    } catch (error) {
      console.error('Błąd podczas dekodowania tokena:', error);
      return null;
    }
  }

  initializeForm(): void {
    this.reservationForm = this.fb.group({
      isAvailableOffline: [false], // Checkbox dla dostępności offline
      startTime: ['', Validators.required], // Data i czas rozpoczęcia
      endTime: ['', Validators.required], // Data i czas zakończenia
      price: ['', [Validators.required, Validators.min(0)]], // Cena lekcji
    });
  }

  onSubmit(): void {
    if (this.reservationForm.invalid) {
      alert('Formularz jest niepoprawny!');
      return;
    }

    const formData = this.reservationForm.value;
    const headers = this.getAuthHeaders();

    const requestPayload = {
      tutorId: this.tutorId,
      isAvailableOffline: formData.isAvailableOffline,
      startTime: formData.startTime,
      endTime: formData.endTime,
      price: formData.price,
    };

    this.http.post('http://localhost:8080/private_lesson/create', requestPayload, { headers })
      .subscribe({
        next: () => {
          alert('Rezerwacja została dodana pomyślnie!');
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.error('Błąd podczas dodawania rezerwacji:', err);
          alert('Wystąpił błąd podczas dodawania rezerwacji. Spróbuj ponownie później.');
        }
      });
  }
}
