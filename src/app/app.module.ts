import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppLayoutModule } from './layout/app.layout.module';
//
import { ListeServiceModule } from './page-service/liste-service/liste-service.module';
import { InscriptionModule } from './page-inscription/inscription.module';
import { DepenseModule } from './page-depense/depense.module';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PorteFeuilleModule } from './porte-feuille/porte-feuille.module';
//
import { LoginModule } from './employe/login/login.module';
import { RdvModule } from './employe/rdv/rdv.module';
import { ListeHistoriqueRdvModule } from './historique-rdv/liste-rdv/RendezVous.module';
import { NewemployeModule } from './employe/newemploye/newemploye.module';
import { ListemployeModule } from './employe/listemploye/listemploye.module';
import { ModifemployeModule } from './employe/modifemploye/modifemploye.module';
import { HoraireModule } from './employe/horaire/horaire.module';
import { AjoutServiceModule } from './page-service/ajout-service/ajout-service.module';
import { EmployePefModule } from './page-preference/employe/liste/employe-pref.module';
import { ServicePefModule } from './page-preference/service/liste/service-pref.module';
import { RdvInsertModule } from './rdv-insert/rdv-insert.module';
import { ClientLoginModule } from './client-login/client-login.module';
import { LoginmanModule } from './loginman/loginman.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AppLayoutModule,

    //mandresy
    ListeServiceModule,
    InscriptionModule,
    DepenseModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    ListeHistoriqueRdvModule,
    PorteFeuilleModule,
    AjoutServiceModule,
    EmployePefModule,
    ServicePefModule,
    ClientLoginModule,

    //sasuke
    LoginModule,
    RdvModule,
    NewemployeModule,
    ListemployeModule,
    ModifemployeModule,
    HoraireModule,
    RdvInsertModule,
    LoginmanModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
