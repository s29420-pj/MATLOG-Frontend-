import { Component } from '@angular/core';
import {MainMenuComponent} from "../main-menu/main-menu.component";
import {CommonModule} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-offer',
  imports: [
    CommonModule, RouterLink
  ],
  templateUrl: './offer.component.html',
  standalone: true,
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
