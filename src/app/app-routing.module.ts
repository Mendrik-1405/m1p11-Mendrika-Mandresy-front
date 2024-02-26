import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
//
import { ListeServiceComponent } from './page-service/liste-service/liste-service.component';
import { InscriptionComponent } from './page-inscription/inscription.component';
import { DepenseComponent } from './page-depense/depense.component';
//
import { LoginComponent } from './employe/login/login.component';
import { RdvComponent } from './employe/rdv/rdv.component';
import { NewemployeComponent } from './employe/newemploye/newemploye.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent},

  {path: 'user/c/inscription', component: InscriptionComponent},

  {path: 'user/m', component: AppLayoutComponent,
  children: [
    { path: 'service', component: ListeServiceComponent },
    { path: 'depense', component: DepenseComponent }
  ]},


  //sasuke
  { path: 'employelogin', component: LoginComponent },
  
  {path: 'employe', component: AppLayoutComponent,
  children: [
    { path: 'rdv', component: RdvComponent },
    { path: 'new', component: NewemployeComponent }
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
