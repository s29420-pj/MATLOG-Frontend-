import { Component } from '@angular/core';
import {MenuComponent} from "../menu/menu.component";
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-offer',
  standalone: true,
    imports: [
        CommonModule, MenuComponent
    ],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.css'
})
export class OfferComponent {

}
