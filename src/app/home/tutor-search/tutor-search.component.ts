import { Component, OnInit } from '@angular/core';
import { TutorService, Tutor } from '../../services/tutor.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tutor-search',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import HttpClientModule
  templateUrl: './tutor-search.component.html',
  styleUrls: ['./tutor-search.component.css'],
})
export class TutorSearchComponent implements OnInit {
  tutors: Tutor[] = [];
  filteredTutors: Tutor[] = [];
  searchQuery: string = '';

  constructor(private tutorService: TutorService) {}

  ngOnInit(): void {
    this.tutorService.getTutors().subscribe({
      next: (data) => {
        console.log('Dane korepetytorów:', data);
        this.tutors = data;
        this.filteredTutors = data;
      },
      error: (error) => {
        console.error('Błąd podczas pobierania danych:', error);
      },
    });
  }


  onSearch(): void {
    this.filteredTutors = this.tutors.filter((tutor) =>
      tutor.specialization.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }
}
