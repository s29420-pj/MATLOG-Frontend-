import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {RegisterComponent} from './auth/register/register.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import { MenuComponent } from './home/menu/menu.component';
import {FaqComponent} from './home/faq/faq/faq.component';
import {BrowserModule} from '@angular/platform-browser';
import {TutorModule} from './home/tutor/tutor.module';
import {FaqModule} from './home/faq/faq.module';
import {ContactModule} from './home/contact/contact.module';


@Component({
  imports: [RouterOutlet, MenuComponent, FaqModule, TutorModule,ContactModule],
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
