
import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {initFlowbite} from 'flowbite';
import {JsonPipe} from '@angular/common';
import {RouterLink} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    RouterLink
  ],
  templateUrl: './register.component.html',
  standalone: true,
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'MATLOG-frontend';
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    initFlowbite();
    this.registerForm = this.buildRegisterForm();
  }

  buildRegisterForm() {
    return this.formBuilder.group({
      firstName: '',
      lastName: '',
      emailAddress: '',
      password: '',
      dateOfBirth: '',
      role: '',
    });
  }

  onSubmit(): void {
    const formData = this.registerForm.value;
    let url = '';
    formData.role = formData.role?.toUpperCase();
    if (formData.role == 'TUTOR') {
      url = 'http://localhost:8080/tutor/user/controller/register'
    } else {
      url = 'http://localhost:8080/student/user/controller/register'
    }
    this.http.post(url, formData).subscribe({
      next: (response) => {
        
      },
      error: (err) => {
        console.error('Registration failed ', err);
      }
    });
  }
}
