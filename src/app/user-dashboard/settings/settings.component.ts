import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  savePersonalData() {
    console.log('Personal data saved');
  }

  changePassword() {
    console.log('Password changed');
  }

}
