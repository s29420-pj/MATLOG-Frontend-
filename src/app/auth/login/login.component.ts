import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    RouterLink
  ],
  templateUrl: './login.component.html',
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  title = 'MATLOG-frontend';
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.buildLoginForm();
  }

  buildLoginForm(): FormGroup {
    return this.formBuilder.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData = this.loginForm.value;
    let url = '';

    // Ustawienie odpowiedniego endpointu na podstawie roli
    formData.role = formData.role?.toUpperCase();
    if (formData.role === 'TUTOR') {
      url = 'http://localhost:8080/tutor/user/controller/login';
    } else if (formData.role === 'STUDENT') {
      url = 'http://localhost:8080/student/user/controller/login';
    } else {
      alert('Nieprawidłowa rola. Wybierz STUDENT lub TUTOR.');
      return;
    }

    this.http.post(url, formData).subscribe({
      next: (response: any) => {
        // Zapisanie tokena do localStorage
        const token = response.token;
        localStorage.setItem('jwtToken', token);

        alert('Logowanie zakończone sukcesem!');
        // Przekierowanie po logowaniu
        if (formData.role === 'TUTOR') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      error: (err) => {
        console.error('Logowanie nie powiodło się:', err);
        alert('Nieprawidłowy email lub hasło.');
      },
    });
  }
}
