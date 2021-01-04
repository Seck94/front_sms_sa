import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexionService } from 'src/app/connexion.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private connexionSer: ConnexionService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: any): void{
    this.connexionSer.login(form).subscribe(
      res => console.log(res)
      //this.router.navigate(['/admin'])
    );
   }

}
