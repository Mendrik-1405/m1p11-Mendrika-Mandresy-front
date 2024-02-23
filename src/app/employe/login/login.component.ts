import { Component } from '@angular/core';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';
import { Router } from '@angular/router';



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

    employe: Employe = {
        name: undefined,
        password: undefined
    }


    constructor(public layoutService: LayoutService,private router: Router, public employeService: EmployeService) { }

    submitForm(): void {
        try {
                this.validateEmploye();
                this.employeService.login(this.employe).subscribe((data) => {
                    var employe: Employe = data;
                    if(employe!==null){
                        localStorage.setItem('employe', JSON.stringify(employe));
                        this.router.navigate(['employe/rdv']);
                    }else{
                        alert('Invalid employe');
                    }
                });
        } catch (error) {
            alert('error' + error);
        }
    }


    validateEmploye(): void {
        if (this.employe.name === undefined || this.employe.password === undefined) {
            throw new Error('Invalid employe');
        }
    }
}
