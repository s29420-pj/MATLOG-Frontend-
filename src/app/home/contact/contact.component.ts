import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        MainMenuComponent
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
