import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { ListeServiceComponent } from './page-service/liste-service/liste-service.component';

const routes: Routes = [{
  path: '', component: AppLayoutComponent,
  children: [
    { path: 'user/m/service', component: ListeServiceComponent }
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
