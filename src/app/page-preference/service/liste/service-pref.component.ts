import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ServicePref } from '../../../models/servicePref';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'service-pref',
  templateUrl: 'service-pref.component.html'
})

export class ServicePrefComponent implements OnInit{
  prefs!: ServicePref[];

  constructor(private prefService: ClientService) {}

  ngOnInit() {
      this.prefService.getAllServicePref().subscribe((data) => {
          this.prefs = data;
      });
  }
}
