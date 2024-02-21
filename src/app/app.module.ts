import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { TableModule } from 'primeng/table';
//import { ButtonModule } from 'primeng/button';
//import { CommonModule } from '@angular/common';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AppLayoutModule } from './layout/app.layout.module';
import { ListeServiceModule } from './page-service/liste-service/liste-service.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
//    BrowserModule,
    AppRoutingModule,
//    TableModule,
//    ButtonModule,
//    CommonModule,
    HttpClientModule,
    AppLayoutModule,
    ListeServiceModule
  ],
  providers: [
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
