import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { RendezVousComponent } from "./RendezVous.component";
import { RendezVousService } from "../../services/RendezVous.service";

@NgModule({
  declarations: [
    RendezVousComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  providers: [
    RendezVousService
  ]
})

export class ListeHistoriqueRdvModule {}