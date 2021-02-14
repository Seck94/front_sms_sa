import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConnexionService } from './connexion.service';
import { Competence } from './model/competence.model';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  constructor(private http: HttpClient, private conSER: ConnexionService) { }

  httpOpnions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.conSER.GetToken()
    })
  };
  AllComp(): Observable<any>{
    return this.http.get<any>(`${environment.url}/admin/competences`, this.httpOpnions);
  }
}
