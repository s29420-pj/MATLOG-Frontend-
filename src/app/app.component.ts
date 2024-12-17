import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {RegisterComponent} from './auth/register/register.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements  OnInit{
  title = 'MATLOG-frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
