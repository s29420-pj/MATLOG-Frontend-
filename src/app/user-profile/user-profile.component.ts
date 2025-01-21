import {Component, Input, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {NgForOf, NgIf} from '@angular/common';

interface SchoolSubject {
  name: string;
}

interface TutorProfile {
  firstName: string;
  lastName: string;
  specializations: SchoolSubject[];
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ]
})
export class UserProfileComponent implements OnInit {
  @Input() tutorId!: string;
  profileData!: TutorProfile;
  specializationsString = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadProfileData();
  }

  loadProfileData(): void {
    this.http
      .get<TutorProfile>(`http://localhost:8080/tutor/user/controller/get/profile/${(this.tutorId)}`)
      .subscribe({
        next: (data) => {
          this.profileData = data;
          this.specializationsString = this.profileData.specializations
            .map((s) => s.name)
            .join(', ');
        },
        error: (err) => console.error('Błąd podczas ładowania profilu:', err),
      });

  }
}
