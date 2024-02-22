import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppLayoutModule } from './layout/app.layout.module';
import { ListeServiceModule } from './page-service/liste-service/liste-service.module';
import { InscriptionModule } from './page-inscription/inscription.module';
import { DepenseModule } from './page-depense/depense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    AppLayoutModule,
    ListeServiceModule,
    InscriptionModule,
    DepenseModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
