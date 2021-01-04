import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './login/connexion/connexion.component';
import { NavComponent } from './header/nav/nav.component';
import { ContainerComponent } from './container/container.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './info/info.component';
import { AdminComponent } from './admin/admin.component';
import { ProfilComponent } from './profil/profil.component';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddUserComponent } from './add-user/add-user.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { GroupecompetenceComponent } from './groupecompetence/groupecompetence.component';
import { CompetenceComponent } from './competence/competence.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpIntercepComponent } from './http-intercep/http-intercep.component';
import { FormsModule } from '@angular/forms';
import { PromosComponent } from './promos/promos.component';
import { AddProfilComponent } from './add-profil/add-profil.component';
import { ListeCompetenceComponent } from './liste-competence/liste-competence.component';
import { AddReferntielComponent } from './add-referntiel/add-referntiel.component';
import { ListGroupecompetenceComponent } from './list-groupecompetence/list-groupecompetence.component';
import { ProfilDeSortirComponent } from './profil-de-sortir/profil-de-sortir.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NavComponent,
    ContainerComponent,
    FooterComponent,
    InfoComponent,
    AdminComponent,
    ProfilComponent,
    UserComponent,
    AddUserComponent,
    ReferentielsComponent,
    GroupecompetenceComponent,
    CompetenceComponent,
    HttpIntercepComponent,
    PromosComponent,
    AddProfilComponent,
    ListeCompetenceComponent,
    AddReferntielComponent,
    ListGroupecompetenceComponent,
    ProfilDeSortirComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
