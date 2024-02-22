import { Component } from '@angular/core';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    employe:Employe = {
        name: undefined,
        password: undefined
    }


    constructor(public layoutService: LayoutService,public employeService: EmployeService) { }

    submitForm(): void {
        // Assuming you have a method to validate the employe object, for example:
        console.log('submit', this.employe);
        if (this.validateEmploye()) {
            this.employeService.login(this.employe).subscribe((data) => {
                console.log('data'+data.name);
                localStorage.setItem('monObjet', JSON.stringify(data));
            });
        } else {
            // Handle validation error, e.g., show an error message
            console.error('Validation failed');
        }
    }

    // Example validation method
    validateEmploye(): boolean {
        // Simple validation: check if name and password are not undefined
        return this.employe.name !== undefined && this.employe.password !== undefined;
    }
}
