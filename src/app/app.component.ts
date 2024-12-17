import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {RegisterComponent} from './auth/register/register.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MenuComponent } from './menu/menu.component';
import {FaqComponent} from './faq/faq/faq.component';
import {BrowserModule} from '@angular/platform-browser';


@Component({
  imports: [RouterOutlet, MenuComponent, FaqComponent, BrowserModule],
  selector: 'app-root',
  standalone: true,
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent implements  OnInit{
  title = 'MATLOG-frontend';
  ngOnInit(): void {
    initFlowbite();
  }
}
