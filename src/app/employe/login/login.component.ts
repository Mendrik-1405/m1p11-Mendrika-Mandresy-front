import { Component } from '@angular/core';
import { LayoutService } from '../../layout/service/app.layout.service';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';
import { Router } from '@angular/router';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {

    loading: boolean = false;

    employe: Employe = {
        name: 'employe',
        password: 'employe'
    }


    constructor(public layoutService: LayoutService,private router: Router, public employeService: EmployeService) { }

    submitForm(): void {
        try {
                this.loading=true;
                this.validateEmploye();
                this.employeService.login(this.employe).subscribe((data) => {
                    var employe: Employe = data;
                    if(employe!==null){
                        localStorage.setItem('employe', JSON.stringify(employe));
                        localStorage.setItem('role', 'employe');
                        this.router.navigate(['employe/rdv']);
                    }else{
                        alert('Invalid employe');
                    }
                });
                setTimeout(() => {
                    // Simuler une requête HTTP de connexion réussie pendant 2 secondes
                    this.loading = false;
                  }, 2000);
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
