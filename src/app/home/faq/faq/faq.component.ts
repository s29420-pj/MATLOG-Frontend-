// src/app/faq/faq.component.ts
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { initFlowbite } from "flowbite";
import {MainMenuComponent} from '../../main-menu/main-menu.component';

interface FaqItem {
  question: string;
  answer: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports: [
    MainMenuComponent
  ],
  standalone: true,
  styleUrls: ['./faq.component.css']
})
export class FaqComponent  implements AfterViewInit {
ngAfterViewInit() {
  initFlowbite();
}
}
