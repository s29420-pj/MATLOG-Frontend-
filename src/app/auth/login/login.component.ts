import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {JsonPipe} from '@angular/common';
import { AxiosService } from '../../axios.service';
import { HttpRequest, HttpHandler } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink,
    JsonPipe
  ],
  templateUrl: "./login.component.html",
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  isLoading: boolean = false;
  errorMessage: string = '';
  credentials = {emailAddress: '', password: ''};

  constructor(
    private fb: FormBuilder,
    private axiosService: AxiosService
  ) {
    this.loginForm = this.fb.group({
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ''
    });
  }

  onLogin(): void {
    let url = '';
    const formData = this.loginForm.value;
    formData.role = formData.role?.toUpperCase();
    if (formData.role == 'TUTOR') {
      url = '/tutor/user/controller/login';
    } else {
      url = '/student/user/controller/login';
    }
    console.log(formData.emailAddress);
    console.log(formData.role);
    this.axiosService.request(
      "POST",
      url,
      {
        emailAddress: formData.emailAddress,
        password: formData.password
      }
    );
  }
}
