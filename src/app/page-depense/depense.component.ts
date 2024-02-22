import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Depense } from '../models/depense';
import { DepenseService } from '../services/depense.service';

@Component({
    selector: 'depense',
    templateUrl: 'depense.component.html'
})
export class DepenseComponent implements OnInit {
    depenses!: Depense[];

    constructor(private depenseService: DepenseService) {}

    ngOnInit() {
        this.depenseService.getAllDepense().subscribe((data) => {
            this.depenses = data;
        });
    }

}