import { NgModule } from "@angular/core";
import { TableModule } from "primeng/table";
import { CommonModule } from "@angular/common";
import { ButtonModule } from "primeng/button";
import { EmployePrefComponent } from "./employe-pref.component";
import { ClientService } from "../../../services/client.service";

@NgModule({
  declarations: [
    EmployePrefComponent
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

export class EmployePefModule {}