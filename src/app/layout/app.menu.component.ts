import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Rendez-Vous',
                items: [
                    { label: 'Prendre', icon: 'pi pi-fw pi-check-square', routerLink: ['/user/c/my-new-rdv'] },
                    { label: 'Liste', icon: 'pi pi-fw pi-list', routerLink: ['/user/c/my-rdv'] },
                ]
            },
            {
                label: 'Favoris',
                items: [
                    { label: 'Services', icon: 'pi pi-fw pi-share-alt', routerLink: ['/user/c/pref/service'] },
                    { label: 'Employés', icon: 'pi pi-fw pi-user', routerLink: ['/user/c/pref/emp'] },
                ]
            },
            {
                label: 'Mon compte',
                items: [
                    { label: 'Recharger', icon: 'pi pi-fw pi-dollar', routerLink: ['/user/c/my-account'] },
                ]
            },
            {
                label: 'Services',
                items: [
                    { label: 'Ajouter', icon: 'pi pi-fw pi-pencil', routerLink: ['/user/m/service/add'] },
                    { label: 'Liste', icon: 'pi pi-fw pi-list', routerLink: ['/user/m/service'] },
                ]
            },
            {
                label: 'Dépenses',
                items: [
                    { label: 'Ajouter', icon: 'pi pi-fw pi-pencil', routerLink: ['/user/m/depense'] },
                ]
            }
        ];
    }
}
