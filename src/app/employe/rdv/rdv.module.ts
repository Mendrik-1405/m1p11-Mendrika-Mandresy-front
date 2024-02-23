import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'
import { RdvComponent } from './rdv.component';
import { RdvService } from '../../services/rdv.service';


@NgModule({
  declarations: [RdvComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    TagModule,
    
  ],
  providers:[RdvService]
})
export class RdvModule { }
