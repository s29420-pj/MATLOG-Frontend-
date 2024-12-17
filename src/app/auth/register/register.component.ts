import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {initFlowbite} from 'flowbite';
import {JsonPipe, NgIf} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgIf
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  title = 'MATLOG-frontend';
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    initFlowbite();
    this.registerForm = this.buildRegisterForm();
  }

  buildRegisterForm() {
    return this.formBuilder.group({
      firstName: ['', Validators.required],
      role: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      userType: ['', Validators.required],
      dateOfBirth: ['']
    });

  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form data:', this.registerForm.value);
      // tu bedzie wysylanie danych
    }
  }
}
