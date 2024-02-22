import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ListeServiceComponent } from './page-service/liste-service/liste-service.component';
import { InscriptionComponent } from './page-inscription/inscription.component';
import { DepenseComponent } from './page-depense/depense.component';

const routes: Routes = [
  {path: '', component: AppLayoutComponent},

  {path: 'user/c/inscription', component: InscriptionComponent},

  {path: 'user/m', component: AppLayoutComponent,
  children: [
    { path: 'service', component: ListeServiceComponent },
    { path: 'depense', component: DepenseComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
