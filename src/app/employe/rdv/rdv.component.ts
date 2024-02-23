import { Component } from '@angular/core';
import { RdvService } from '../../services/rdv.service';
import { Rdv } from '../../models/rdv';
import { Employe } from '../../models/employe';

@Component({
  selector: 'app-rdv',
  templateUrl: './rdv.component.html',
  styleUrl: './rdv.component.scss'
})
export class RdvComponent {
  rdvs!: Rdv[];

  constructor(private rdvService: RdvService) {}

  ngOnInit() {
    const employe: Employe = JSON.parse(localStorage.getItem('employe') || '{}');
    this.rdvService.findByIdemploye(employe._id ?? '').subscribe((data) => {
      this.rdvs = data;
  });
  }

  // calculateCustomerTotal(name: string) {
  //     let total = 0;

  //     if (this.customers) {
  //         for (let customer of this.customers) {
  //             if (customer.representative?.name === name) {
  //                 total++;
  //             }
  //         }
  //     }

  //     return total;
  // }

  // getSeverity(status: string) {
  //     switch (status) {
  //         case 'unqualified':
  //             return 'danger';

  //         case 'qualified':
  //             return 'success';

  //         case 'new':
  //             return 'info';

  //         case 'negotiation':
  //             return 'warning';

  //         case 'renewal':
  //             return null;
  //     }
  // }
}
