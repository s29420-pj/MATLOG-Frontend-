import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";

@Component({
  selector: 'app-contact',
  imports: [
    MainMenuComponent
  ],
  templateUrl: './contact.component.html',
  standalone: true,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
