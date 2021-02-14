import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupecompetenceService {

  constructor(private http: HttpClient, private ConSER: ConnexionService) { }

  httpOpnions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + this.ConSER.GetToken()
    })
  };
  AllComp(): Observable<any>{
    return this.http.get<any>(`${environment.url}/admin/groupecompetences`, this.httpOpnions);
  }
}
