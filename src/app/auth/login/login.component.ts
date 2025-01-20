import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: "./login.component.html",
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
