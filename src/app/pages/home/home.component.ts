import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule
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
}
