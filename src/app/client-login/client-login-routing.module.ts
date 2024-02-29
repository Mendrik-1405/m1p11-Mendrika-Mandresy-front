import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClientLoginComponent } from './client-login.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ClientLoginComponent }
    ])],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
