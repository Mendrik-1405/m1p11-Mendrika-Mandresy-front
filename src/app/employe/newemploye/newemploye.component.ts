import { Component } from '@angular/core';
import { Employe } from '../../models/employe';
import { EmployeService } from '../../services/employe.service';
import { Router } from '@angular/router';
import { FileHandle } from './dragDrop.directive';
@Component({
  selector: 'app-newemploye',
  templateUrl: './newemploye.component.html',
  styleUrl: './newemploye.component.scss'
})
export class NewemployeComponent {
  selectedFile: File | null = null;
  employe: Employe = {        
    name: undefined,
    password: undefined
  };
  files: FileHandle[] = [];

  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }
  constructor(private router: Router, public employeService: EmployeService) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  submitEmpl() {
    if (this.files) {
      const formData = new FormData();
      const fileBlob = new Blob([this.files[0].file]);
      formData.append('photo', fileBlob, this.files[0].file.name);
      formData.append('name', this.employe.name || '');
      formData.append('password', this.employe.password || '');
      formData.append('sexe', this.employe.sexe || '');
    
      this.employeService.uploadEmployeData(formData).subscribe(response => {
        console.log('Data submitted successfully');
      });
    }
  }
}
