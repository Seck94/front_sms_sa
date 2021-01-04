import { Component, OnInit } from '@angular/core';
import { ConnexionService } from './connexion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'PFLR';
  isLogin = false;

constructor(private conSer: ConnexionService){}

ngOnInit(): void {
  this.conSer.isLogin().subscribe(
    res => this.isLogin = res
  );
}

}
