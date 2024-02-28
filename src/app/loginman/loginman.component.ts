import { Component } from '@angular/core';
import { LayoutService } from '../layout/service/app.layout.service';
import { Router } from '@angular/router';
import { Manager } from '../models/manager';
import { ManagerService } from '../services/manager.service';

@Component({
  selector: 'app-loginman',
  templateUrl: './loginman.component.html',
  styleUrl: './loginman.component.scss'
})
export class LoginmanComponent {


    loading: boolean = false;

    manager: Manager = {
      nom: undefined,
        password: undefined
    }


    constructor(public layoutService: LayoutService,private router: Router, public managerService: ManagerService) { }

    submitForm(): void {
        try {
                this.loading=true;
                this.validateManager();
                this.managerService.login(this.manager).subscribe((data) => {
                    var manager: Manager = data;
                    if(manager!==null){
                        localStorage.setItem('manager', JSON.stringify(manager));
                        this.router.navigate(['employe/list']);
                    }else{
                        alert('Invalid manager');
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


    validateManager(): void {
        if (this.manager.nom === undefined || this.manager.password === undefined) {
            throw new Error('Invalid manager');
        }
    }

}
