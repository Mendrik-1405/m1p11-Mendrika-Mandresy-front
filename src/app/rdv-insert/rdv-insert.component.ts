import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Service } from '../models/service';
import { Employe } from '../models/employe';
import { ServiceService } from '../services/service.service';
import { EmployeService } from '../services/employe.service';
import { RdvService } from '../services/rdv.service';
import { Client } from '../models/client';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rdv-insert',
  templateUrl: './rdv-insert.component.html',
  styleUrls: ['./rdv-insert.component.scss']
})
export class RdvInsertComponent implements OnInit {
  rdvForm!: FormGroup;
  services !: Service[];
  employees !: Employe[];
  client:Client=JSON.parse(localStorage.getItem('client') || '{}');

  constructor(private fb: FormBuilder,private serviceService: ServiceService,private employeService: EmployeService,private rdvService: RdvService,private router: Router) { }

 ngOnInit() {
    this.serviceService.getAllService().subscribe((data) => {
      this.services = data;
    });
    this.employeService.getAllEmploye().subscribe((data) => {
        this.employees= data;
    });
    this.rdvForm = this.fb.group({
      dateheure: [''],
      serviceEmpl: this.fb.array([this.createServiceEmplGroup()])
    });
 }

 get serviceEmpls() {
    return this.rdvForm.get('serviceEmpl') as FormArray;
 }

 createServiceEmplGroup(): FormGroup {
    return this.fb.group({
      service: [''],
      employe: ['']
    });
 }

 addServiceEmpl() {
    this.serviceEmpls.push(this.createServiceEmplGroup());
 }

 removeServiceEmpl(index: number) {
    this.serviceEmpls.removeAt(index);
 }

 onSubmit() {
  this.rdvService.createRdv(this.rdvForm.value,this.client._id ?? '').subscribe((data) => {
      console.log("response "+data);
  });
  this.router.navigate(['/employe/rdv']);
 }
}
