import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { CompetenceService } from '../competence.service';

@Component({
  selector: 'app-groupecompetence',
  templateUrl: './groupecompetence.component.html',
  styleUrls: ['./groupecompetence.component.scss']
})
export class GroupecompetenceComponent implements OnInit {
  competences: any ;
  selectedCities2: any ;
  constructor( private CompService: CompetenceService) {
   }
  ngOnInit(): void {
    this.CompService.AllComp().subscribe(
      data => {this.competences = data, console.log(data);
      },
      error => console.log(error)
    )
  }

}
