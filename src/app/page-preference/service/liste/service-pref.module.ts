import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { ClientService } from "../../../services/client.service";
import { ServicePrefComponent } from "./service-pref.component";

@NgModule({
  declarations: [
    ServicePrefComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  providers: [
    ClientService
  ]
})

export class ServicePefModule {}