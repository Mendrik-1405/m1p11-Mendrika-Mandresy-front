import { NgModule } from "@angular/core";
import { InscriptionComponent } from "./inscription.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ]
})

export class InscriptionModule {}