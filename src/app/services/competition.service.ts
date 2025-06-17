import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { CompetitionModel } from '../model/competition.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  constructor(
    private http: HttpClient,
  ) { }

  api_url : string = environment.apiUrl;

  getCompetition() : Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>(this.api_url + "GetAllCompetition")
  }

  postCompetition(payload: CompetitionModel){
    return this.http.post(this.api_url + "competition", payload);
  }
}
