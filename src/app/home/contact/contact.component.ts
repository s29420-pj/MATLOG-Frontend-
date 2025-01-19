import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-contact',
  imports: [
    MainMenuComponent,
    HttpClientModule
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
