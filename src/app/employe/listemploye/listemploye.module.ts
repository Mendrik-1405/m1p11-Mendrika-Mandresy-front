import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeService } from '../../services/employe.service';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { RippleModule } from 'primeng/ripple';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag'
import { ListemployeComponent } from './listemploye.component';

@NgModule({
  declarations: [ListemployeComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    TagModule,
    ToastModule
  ],
  providers:[EmployeService]
})
export class ListemployeModule { 
  
}
