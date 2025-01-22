import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { JsonPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AxiosService } from '../../axios.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private axiosService: AxiosService,
    private router: Router // Dodaj Router
  ) {}

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

    if (formData.role === 'TUTOR') {
      url = '/tutor/user/controller/register';
    } else {
      url = '/student/user/controller/register';
    }

    this.axiosService.request(
      "POST",
      url,
      {
        firstName: formData.firstName,
        lastName: formData.lastName,
        emailAddress: formData.emailAddress,
        password: formData.password,
        dateOfBirth: formData.dateOfBirth,
        role: formData.role
      }
    ).then(
      response => {
        if (formData.role === 'TUTOR') {
          this.router.navigate(['/edit-profile', response.id]);
        } else {
          this.router.navigate(['/dashboard']);
        }
      }
    )
  }

}
