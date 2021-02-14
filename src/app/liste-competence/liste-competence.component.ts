import { Component, OnInit } from '@angular/core';
import { CompetenceService } from '../competence.service';
import { Competence } from '../model/competence.model';

@Component({
  selector: 'app-liste-competence',
  templateUrl: './liste-competence.component.html',
  styleUrls: ['./liste-competence.component.scss']
})
export class ListeCompetenceComponent implements OnInit {

  competence: Competence [] = [] ;

  constructor(private comServ: CompetenceService) { }

  ngOnInit(): void {
    this.comServ.AllComp().subscribe(
      data => {
        console.log(data);
        this.competence = data ;
      }
    );
  }

}
