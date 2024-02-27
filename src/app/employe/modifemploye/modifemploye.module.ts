import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModifemployeComponent } from './modifemploye.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { InputTextModule } from "primeng/inputtext";
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DragDirective } from './dragDrop.directive';




@NgModule({
  declarations: [
    DragDirective,ModifemployeComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    InputTextModule,
    ButtonModule,
    FormsModule
  ]
})
export class ModifemployeModule { }
