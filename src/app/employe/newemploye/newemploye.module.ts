import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AutoCompleteModule } from "primeng/autocomplete";
// import { CalendarModule } from "primeng/calendar";
// import { ChipsModule } from "primeng/chips";
// import { DropdownModule } from "primeng/dropdown";
// import { InputMaskModule } from "primeng/inputmask";
// import { InputNumberModule } from "primeng/inputnumber";
// import { CascadeSelectModule } from "primeng/cascadeselect";
// import { MultiSelectModule } from "primeng/multiselect";
// import { InputTextareaModule } from "primeng/inputtextarea";
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputTextModule } from "primeng/inputtext";
import { NewemployeComponent } from './newemploye.component';
import { DragDirective } from './dragDrop.directive';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [NewemployeComponent,DragDirective],
  imports: [
    CommonModule,
    DragDropModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class NewemployeModule { }
