import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RdvService } from '../../services/rdv.service';
import { Rdv } from '../../models/rdv';
import { Employe } from '../../models/employe';
import { delay } from 'rxjs/operators';

interface expandedRows {
  [key: string]: boolean;
}

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrl: './rdv.component.scss'
})
export class RdvComponent {
  loading: boolean = true;
  rdvs!: Rdv[];
  isExpanded: boolean = false;
  expandedRows: expandedRows = {};
  constructor(private rdvService: RdvService) {}

  ngOnInit() {
    const employe: Employe = JSON.parse(localStorage.getItem('employe') || '{}');
    this.rdvService.findByIdemploye(employe._id ?? '').pipe(
      // Simulate a  1-second delay
      delay(1000)
    ).subscribe((data) => {
        this.rdvs = data;
        this.loading = false;
      });

  }

 
}
