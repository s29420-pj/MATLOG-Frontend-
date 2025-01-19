// src/app/faq/faq.component.ts
import { Component,  AfterViewInit } from '@angular/core';
import { initFlowbite } from "flowbite";
import {MainMenuComponent} from '../../main-menu/main-menu.component';
import {HttpClientModule} from '@angular/common/http';



@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  imports: [
    HttpClientModule,
  ],
  standalone: true,
  styleUrls: ['./faq.component.css']
})
export class FaqComponent  implements AfterViewInit {
ngAfterViewInit() {
  initFlowbite();
}
}
