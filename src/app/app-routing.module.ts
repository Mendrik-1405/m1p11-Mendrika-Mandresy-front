import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
//
import { ListeServiceComponent } from './page-service/liste-service/liste-service.component';
import { InscriptionComponent } from './page-inscription/inscription.component';
import { DepenseComponent } from './page-depense/depense.component';
import { RendezVousComponent } from './historique-rdv/liste-rdv/RendezVous.component';
import { ServicePrefComponent } from './page-preference/service/liste/service-pref.component';
import { EmployePrefComponent } from './page-preference/employe/liste/employe-pref.component';
import { ClientLoginComponent } from './client-login/client-login.component';
//
import { LoginComponent } from './employe/login/login.component';
import { RdvComponent } from './employe/rdv/rdv.component';
import { NewemployeComponent } from './employe/newemploye/newemploye.component';
import { PorteFeuilleComponent } from './porte-feuille/porte-feuille.component';
import { ListemployeComponent } from './employe/listemploye/listemploye.component';
import { ModifemployeComponent } from './employe/modifemploye/modifemploye.component';
import { HoraireComponent } from './employe/horaire/horaire.component';
import { AjoutServiceComponent } from './page-service/ajout-service/ajout-service.component';
import { RdvInsertComponent } from './rdv-insert/rdv-insert.component';
import { LoginmanComponent } from './loginman/loginman.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent},

  {path: 'user/c/inscription', component: InscriptionComponent},
  {path: 'user/c/login', component: ClientLoginComponent},

  {path: 'user/c', component: AppLayoutComponent,
  children: [
    {path: 'my-rdv', component: RendezVousComponent},
    {path: 'my-account', component: PorteFeuilleComponent},
    {path: 'pref/service', component: ServicePrefComponent},
    {path: 'pref/emp', component: EmployePrefComponent},
    {path: 'my-new-rdv', component: RdvInsertComponent},
    {path: 'my-account', component: PorteFeuilleComponent}
  ]},

  {path: 'user/m', component: AppLayoutComponent,
  children: [
    { path: 'service', component: ListeServiceComponent },
    { path: 'depense', component: DepenseComponent },
    { path: 'service/add', component: AjoutServiceComponent }
  ]},


  //sasuke
  { path: 'employelogin', component: LoginComponent },
  { path: 'managerlogin', component: LoginmanComponent },
  
  {path: 'employe', component: AppLayoutComponent,
  children: [
    { path: 'rdv', component: RdvComponent },
    { path: 'new', component: NewemployeComponent },
    { path: 'list', component: ListemployeComponent },
    { path: 'update/:id', component: ModifemployeComponent },
    { path: 'horaire', component:HoraireComponent},
  ]},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
