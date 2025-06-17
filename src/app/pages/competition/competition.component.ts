import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompetitionModel } from '../../model/competition.model';
import { CompetitionService } from '../../services/competition.service';

@Component({
  selector: 'app-competition',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './competition.component.html',
  styleUrl: './competition.component.scss'
})
export class CompetitionComponent implements OnInit {

  newObj: CompetitionModel = new CompetitionModel();
  gridList: CompetitionModel[] = [];

  competitionService = inject(CompetitionService);

  ngOnInit() {
    this.getAllCompetition();
  }

  getAllCompetition() {
    this.competitionService.getCompetition().subscribe({
      next: (result: any) => {
        this.gridList = result;
      },
      error: () => {
        alert("Api Error");
      }
    })
  }

  onSave() {
    this.competitionService.postCompetition(this.newObj).subscribe({
      next: () => {
        alert("Competition added successfully !");
        this.getAllCompetition();
      },
      error: () => {
        alert("Api Error");
      }
    })
  }
}
