import { TableModule } from 'primeng/table';
import { Component, OnInit } from '@angular/core';
import { Service } from '../../models/service';
import { ServiceService } from '../../services/service.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'service-liste',
    templateUrl: 'liste-service.component.html'
})
export class ListeServiceComponent implements OnInit {
    services!: Service[];

    constructor(private serviceService: ServiceService) {}

    ngOnInit() {
        this.serviceService.getAllService().subscribe((data) => {
            this.services = data;
        });
    }

    // getSeverity(status: string) {
    //     switch (status) {
    //         case 'INSTOCK':
    //             return 'success';
    //         case 'LOWSTOCK':
    //             return 'warning';
    //         case 'OUTOFSTOCK':
    //             return 'danger';
    //     }
    // }
}