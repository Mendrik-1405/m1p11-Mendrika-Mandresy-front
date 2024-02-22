import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { DepenseComponent } from "./depense.component";
import { DepenseService } from "../services/depense.service";

@NgModule({
  declarations: [
    DepenseComponent
  ],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule
  ],
  providers: [
    DepenseService
  ]
})

export class DepenseModule {}