import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag'
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
//
import { RdvComponent } from './rdv.component';
import { RdvService } from '../../services/rdv.service';
import { MessageService,ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [RdvComponent],
  imports: [
    TableModule,
    CommonModule,
    ButtonModule,
    TagModule,
    ToastModule,
    SkeletonModule
    //
  ],
  providers:[MessageService, ConfirmationService,RdvService]
})
export class RdvModule { }
