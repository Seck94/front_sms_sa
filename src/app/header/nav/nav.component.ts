import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/connexion.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private conser: ConnexionService, private router: Router) { }

  ngOnInit(): void {
  }
  onclic(){
    this.conser.logout();
    this.router.navigate(['/login']);
  }
}
