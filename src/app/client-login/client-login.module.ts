import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientLoginComponent } from './client-login.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ToastModule } from 'primeng/toast';
@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule,
        ProgressSpinnerModule,
        ProgressBarModule,
        ToastModule,
        RouterModule
    ],
    declarations: [ClientLoginComponent]
})
export class ClientLoginModule { }
