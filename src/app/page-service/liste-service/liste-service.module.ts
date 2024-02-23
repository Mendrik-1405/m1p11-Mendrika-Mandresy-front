import { NgModule } from "@angular/core";
import { ListeServiceComponent } from "./liste-service.component";
import { ServiceService } from "../../services/service.service";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    ListeServiceComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  providers: [
    ServiceService
  ]
})

export class ListeServiceModule {}