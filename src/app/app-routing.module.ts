import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { AddReferntielComponent } from './add-referntiel/add-referntiel.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
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
  {path: 'header' , component: NavComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'profils', component: ProfilComponent},
  {path: 'Add-user', component: AddUserComponent},
  {path: 'referentiel', component: ReferentielsComponent},
  {path: 'competence', component: CompetenceComponent},
  {path: 'promos', component: PromosComponent},
  {path: 'addprofil', component: AddProfilComponent},
  {path: 'listCompetence', component: ListeCompetenceComponent},
  {path: 'AddReferentiel', component: AddReferntielComponent},
  {path: 'groupcompetence', component: GroupecompetenceComponent},
  {path: 'listgrpcompetence', component: ListGroupecompetenceComponent},
  {path: 'profilsortir', component: ProfilDeSortirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
