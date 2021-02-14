import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,  Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authService: ConnexionService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterTestingModule):
  Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.islogin() !== true){
      this.router.navigate(['/login']);
    }
    return true;
  }

  // ngModel: no binding [ngModel]: one way binding et [(ngModel)] two wyas binding
  // canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterTestingModule):
  // Observable<boolean> | Promise<boolean> | boolean {
  //   return this.canActivate(childRoute, state);
  // }
}
