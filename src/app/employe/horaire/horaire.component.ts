import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Employe } from '../../models/employe';
import { Horaire } from '../../models/horaire';
import { EmployeService } from '../../services/employe.service';

@Component({
  selector: 'app-horaire',
  templateUrl: './horaire.component.html',
  styleUrl: './horaire.component.scss'
})
export class HoraireComponent {
  employe: Employe = JSON.parse(localStorage.getItem('employe') || '{}');
  horaire: Horaire= { 
    debut: undefined,
    fin: undefined
  };
  constructor(private employeService: EmployeService) {}

  ngOnInit() {
    this.horaire.debut = this.employe.horaire?.debut;
    this.horaire.fin = this.employe.horaire?.fin;
  }

 onSubmit() {
    if(this.horaire.debut !== undefined || this.horaire.fin !== undefined){
      this.employe.horaire = {
        debut:  new Date('0001-01-01T'+this.horaire.debut+'Z'),
        fin: new Date('0001-01-01T'+this.horaire.fin+'Z')
      };
      this.employeService.updateEmployehoraire(this.employe._id??'',this.employe).subscribe((data) => {
        this.employe=data;
      });
    }
  }
}