import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
    imports: [
        CommonModule, MainMenuComponent
    ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
