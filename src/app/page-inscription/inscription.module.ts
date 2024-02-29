import { NgModule } from "@angular/core";
import { InscriptionComponent } from "./inscription.component";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";

@NgModule({
  declarations: [
    InscriptionComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    RouterModule
  ]
})

export class InscriptionModule {}