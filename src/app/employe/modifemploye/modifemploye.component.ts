import { Component } from '@angular/core';
import { Employe } from '../../models/employe';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from '../../services/employe.service';
import { FileHandle } from './dragDrop.directive';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-modifemploye',
  templateUrl: './modifemploye.component.html',
  styleUrl: './modifemploye.component.scss'
})
export class ModifemployeComponent {
  selectedFile: File | null = null;
  employe: Employe = {        
    name: undefined,
    password: undefined
  };
  files: FileHandle[] = [];
  constructor(private router: Router,public activatedRoute: ActivatedRoute, public employeService: EmployeService) { }
  ngOnInit() {
    const employeId = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    this.employeService.getEmployebyId(employeId).subscribe((data) => {
        this.employe= data;
      });
  }
  
  filesDropped(files: FileHandle[]): void {
    this.files = files;
  }

  upload(): void {
    //get image upload file obj;
  }

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
      formData.append('_id', this.employe._id || '');
      
      this.employeService.uploadEmployeData(formData).subscribe(response => {
        console.log('Data submitted successfully');
      });
    }
  }
}
