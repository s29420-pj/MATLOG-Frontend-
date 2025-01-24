import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {HttpClient, HttpClientModule, HttpHeaders} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  standalone: true,
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;
  id!: string; // ID tutora pobierane z URL

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editForm = this.initializeEditForm();
    this.id = this.route.snapshot.paramMap.get('id') || '';
    if (!this.id) {
      console.error('ID tutora nie zostało podane!');
      this.router.navigate(['/auth/login']);
      return;
    }
    this.loadProfileData();
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

  private initializeEditForm(): FormGroup {
    return this.formBuilder.group({
      biography: [''],
      specializations: ['', Validators.required],
    });
  }

  private loadProfileData(): void {
    const headers = this.getAuthHeaders();
    this.http
      .get(`http://localhost:8080/tutor/user/controller/get/profile/${this.id}`, { headers })
      .subscribe({
        next: (data: any) => {
          this.editForm.patchValue({
            biography: data.biography || '',
            specializations: (data.specializations || []).join(', '),
          });
        },
        error: (err) => {
          console.error('Błąd podczas ładowania danych profilu:', err);
          alert('Nie udało się załadować danych profilu. Spróbuj ponownie później.');
        },
      });
  }

  private saveBiography(): void {
    const headers = this.getAuthHeaders();
    const biography = this.editForm.value.biography;

    this.http
      .put(
        `http://localhost:8080/tutor/user/controller/add/biography`,
        { id: this.id, biography },
        { headers }
      )
      .subscribe({
        next: () => {
          console.log('Biografia zaktualizowana!');
        },
        error: (err) => {
          console.error('Błąd podczas aktualizacji biografii:', err);
          alert('Nie udało się zaktualizować biografii. Spróbuj ponownie później.');
        },
      });
  }

  private saveSpecializations(): void {
    const headers = this.getAuthHeaders();
    const specializations = this.editForm.value.specializations
      .split(',')
      .map((s: string) => s.trim())
      .map((s:string) => s.toUpperCase());

    this.http
      .put(
        `http://localhost:8080/tutor/user/controller/add/specializations`,
        { id: this.id, specializations },
        { headers }
      )
      .subscribe({
        next: () => {
          console.log('Specjalizacje zaktualizowane!');
        },
        error: (err) => {
          console.error('Błąd podczas aktualizacji specjalizacji:', err);
          alert('Nie udało się zaktualizować specjalizacji. Spróbuj ponownie później.');
        },
      });
  }

  onSubmit(): void {
    if (this.editForm.invalid) {
      alert('Formularz jest niepoprawny.');
      return;
    }

    this.saveBiography();
    this.saveSpecializations();

    // Po zapisaniu przekieruj do dashboardu
    setTimeout(() => {
      this.router.navigate(['/dashboard']);
    }, 1000);
  }
}
