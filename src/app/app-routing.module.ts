import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { AddReferntielComponent } from './add-referntiel/add-referntiel.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { AffichePromoComponent } from './affiche-promo/affiche-promo.component';
import { AuthGuardService } from './auth-guard.service';
import { CompetenceComponent } from './competence/competence.component';
import { GroupecompetenceComponent } from './groupecompetence/groupecompetence.component';
import { NavComponent } from './header/nav/nav.component';
import { ListGroupecompetenceComponent } from './list-groupecompetence/list-groupecompetence.component';
import { ListeCompetenceComponent } from './liste-competence/liste-competence.component';
import { ConnexionComponent } from './login/connexion/connexion.component';
import { ProfilDeSortirComponent } from './profil-de-sortir/profil-de-sortir.component';
import { ProfilComponent } from './profil/profil.component';
import { PromosComponent } from './promos/promos.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';

const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: ConnexionComponent},
  {path: 'header' , component: NavComponent, canActivate: [AuthGuardService]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService]},
  {path: 'profils', component: ProfilComponent, canActivate: [AuthGuardService]},
  {path: 'Add-user', component: AddUserComponent, canActivate: [AuthGuardService]},
  {path: 'referentiel', component: ReferentielsComponent, canActivate: [AuthGuardService]},
  {path: 'competence', component: CompetenceComponent, canActivate: [AuthGuardService]},
  {path: 'promos', component: PromosComponent, canActivate: [AuthGuardService]},
  {path: 'addprofil', component: AddProfilComponent, canActivate: [AuthGuardService]},
  {path: 'listCompetence', component: ListeCompetenceComponent, canActivate: [AuthGuardService]},
  {path: 'AddReferentiel', component: AddReferntielComponent, canActivate: [AuthGuardService]},
  {path: 'groupcompetence', component: GroupecompetenceComponent, canActivate: [AuthGuardService]},
  {path: 'listgrpcompetence', component: ListGroupecompetenceComponent, canActivate: [AuthGuardService]},
  {path: 'profilsortir', component: ProfilDeSortirComponent, canActivate: [AuthGuardService]},
  {path: 'promo', component: AffichePromoComponent, canActivate: [AuthGuardService]},
  {path: 'promos', component: PromosComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
