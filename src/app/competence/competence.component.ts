import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { GroupecompetenceService } from '../groupecompetence.service';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
   grpcompetences: any ;
   selectedCities: any ;
  constructor(private grpSer: GroupecompetenceService) { }

  ngOnInit(): void {
    this.grpSer.AllComp().subscribe(
      data => {this.grpcompetences = data , console.log(data);}
    )
  }

}
