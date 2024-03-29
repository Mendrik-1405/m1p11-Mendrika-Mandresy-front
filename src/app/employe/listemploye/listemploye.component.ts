import { Component } from '@angular/core';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';
import { delay } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-listemploye',
  templateUrl: './listemploye.component.html',
  styleUrl: './listemploye.component.scss'
})
export class ListemployeComponent {
loading: boolean = true;
employes!: Employe[];

constructor(private employeService: EmployeService,private cookieService: CookieService) {}

ngOnInit() {
  
  this.employeService.getAllEmploye().pipe(
    // Simulate a  1-second delay
    delay(1000)
  ).subscribe((data) => {
      this.employes= data;
      this.loading = false;
      console.log("role"+this.cookieService.get('role')+"role");
    });

}


}
