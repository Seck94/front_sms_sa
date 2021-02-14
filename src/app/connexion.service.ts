import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';

const BaseURL = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  islog = new BehaviorSubject<boolean>(this.isToken());

  constructor(private http: HttpClient, private router: Router) { }
  public nameAuth = 'File_Rouge';
  public localSrorage = window.localStorage;
  login(data: any): Observable<any> {
    return this.http.post(`${BaseURL}/login_check`, data).pipe(
      map (
        (user: any) => {
          if (user) {
            localStorage.setItem('token', JSON.stringify(user));
            console.log(user.token);
            localStorage.setItem('entrer', user.token);
            this.islog.next(true);
            const tokendecode = jwt_decode(user.token);
            console.log(tokendecode);
            switch ( tokendecode.roles[0]){
              case 'ROLE_ADMIN':
             this.router.navigate(['/admin']);
             break;
            }
            switch (tokendecode.roles[0]){
              case 'ROLE_APPRENANT':
             this.router.navigate(['/apprenants']);
             break;
            }
            switch (tokendecode.roles[0]){
             case 'ROLE_FORMATEUR':
            this.router.navigate(['/formateur']);
            break;
           }
          }
         }
      )
    );
  }
  getToken(): any {
    const currentUser = localStorage.getItem('token');
    if (currentUser) {
     const token = JSON.parse(currentUser);

     return token.token;
    }
    return null;
  }

  isLogin(): Observable<boolean> {
    return this.islog.asObservable();
  }

  isToken(): boolean{
    if (localStorage.getItem('token')) {
      return true;
    }
    return false ;
  }
  logout(): any {
    localStorage.removeItem('token');
    this.islog.next(false);
  }

  islogin(): boolean {
    const authToken = localStorage.getItem('token');
    return (authToken !== null) ? true : false ;
  }

  GetToken()
  {
    console.log(this.localSrorage.getItem('entrer'));
    return this.localSrorage.getItem('entrer');
  }
}
