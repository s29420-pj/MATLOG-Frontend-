import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule
  ]
})
export class EditProfileComponent implements OnInit {
  editForm!: FormGroup;
  tutorId = 'tutor-id'; // Pobierz z kontekstu autoryzacji lub przekaz jako Input()

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.initializeEditForm();
    this.loadProfileData();
  }

  initializeEditForm(): void {
    this.editForm = this.formBuilder.group({
      biography: ['', Validators.required],
      specializations: ['', Validators.required],
    });
  }

  loadProfileData(): void {
    this.http
      .get(`http://localhost:8080/tutor/user/controller/get/profile/${this.tutorId}`)
      .subscribe({
        next: (data: any) => {
          this.editForm.patchValue({
            biography: data.biography,
            specializations: data.specializations.join(', '),
          });
        },
        error: (err) => {
          console.error('Błąd podczas ładowania danych:', err);
        },
      });
  }

  saveProfile(): void {
    if (this.editForm.invalid) {
      alert('Formularz jest niepoprawny.');
      return;
    }

    const biographyData = { biography: this.editForm.value.biography };
    const specializations = this.editForm.value.specializations
      .split(',')
      .map((s: string) => s.trim());

    this.http
      .put(`http://localhost:8080/tutor/user/controller/add/biography/${this.tutorId}`, biographyData)
      .subscribe({
        next: () => {
          alert('Biografia zaktualizowana!');
        },
        error: (err) => {
          console.error('Błąd podczas aktualizacji biografii:', err);
        },
      });

    this.http
      .put(
        `http://localhost:8080/tutor/user/controller/add/specializations/${this.tutorId}`,
        specializations
      )
      .subscribe({
        next: () => {
          alert('Specjalizacje zaktualizowane!');
        },
        error: (err) => {
          console.error('Błąd podczas aktualizacji specjalizacji:', err);
        },
      });
  }
}
