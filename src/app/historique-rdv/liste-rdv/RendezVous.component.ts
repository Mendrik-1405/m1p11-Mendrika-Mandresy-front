import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RendezVous } from '../../models/RendezVous';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RendezVousService } from '../../services/RendezVous.service';

@Component({
  selector: 'histo-rdv-liste',
  templateUrl: 'RendezVous.component.html'
})

export class RendezVousComponent implements OnInit{
  rdv!: RendezVous[];

  constructor(private rdvService: RendezVousService) {}

  ngOnInit() {
      this.rdvService.getAllHistoriqueRdv().subscribe((data) => {
          this.rdv = data;
      });
  }
}
