import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-offer',
  imports: [
    CommonModule, MainMenuComponent
  ],
  templateUrl: './offer.component.html',
  standalone: true,
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
