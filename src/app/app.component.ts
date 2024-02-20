import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: `
    <main>
      <service-liste></service-liste>
    </main>
  `
})
export class AppComponent {
  title = 'm1p11-Mendrika-Mandresy-front';
}
