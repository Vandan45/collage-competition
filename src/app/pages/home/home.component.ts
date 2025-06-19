import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompetitionModel } from '../../model/competition.model';
import { Observable } from 'rxjs';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
competitions = [
    { title: 'Code Clash', description: 'Compete in coding challenges', startDate: '2025-07-01', endDate: '2025-07-10' },
    { title: 'Design Sprint', description: 'UI/UX creativity contest', startDate: '2025-08-05', endDate: '2025-08-12' },
    { title: 'Hackathon Hero', description: 'Build innovative apps in teams', startDate: '2025-09-15', endDate: '2025-09-20' },
  ];

  steps = [
    { title: 'Register', icon: 'bi bi-person-circle', description: 'Create your free student account' },
    { title: 'Join Competition', icon: 'bi bi-clipboard2-check-fill', description: 'Pick from various college events' },
    { title: 'Submit Project', icon: 'bi bi-upload', description: 'Submit your solution before deadline' },
    { title: 'Win Prizes', icon: 'bi bi-award', description: 'Stand a chance to win exciting rewards' },
  ];

  winners = [
    { name: 'John Doe',url: 'assets/images/stu1.jpg', blog: 'Winning this hackathon boosted my confidence!' },
    { name: 'Jane Smith', url: 'assets/images/stu2.jpg', blog: 'An amazing journey and a great learning experience.' },
    { name: 'Raj Patel', url: 'assets/images/stu3.jpg', blog: 'Grateful for the opportunity and support from mentors.' },
  ];

  testimonials = [
  {
    feedback: 'Participating in these competitions gave me confidence and boosted my resume!',
    name: 'Aarav Sharma',
    college: 'XYZ Institute of Technology',
    image: 'assets/images/stu1.jpg'
  },
  {
    feedback: 'Great platform to learn, compete and connect with other students across colleges.',
    name: 'Meera Patel',
    college: 'ABC College of Engineering',
    image: 'assets/images/stu2.jpg'
  },
  {
    feedback: 'Loved the way it was organized, and the prizes were a bonus!',
    name: 'Raj Verma',
    college: 'LMN University',
    image: 'assets/images/stu3.jpg'
  }
];

  competitionService = inject(CompetitionService);
  competitionList$: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>

  constructor() {
    this.competitionList$ = this.competitionService.getCompetition();
    console.log("this.competitionList$", this.competitionList$);
    
  }
}
