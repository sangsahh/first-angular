import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { sharedImports } from './shared/shared-import';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, sharedImports],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'first-angular';
   showHeader = true;

  constructor(private router: Router) {
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.showHeader = !['/login', '/signup'].includes(event.urlAfterRedirects);
    }
  });
}
}
