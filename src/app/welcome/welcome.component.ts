import { Component } from '@angular/core';
import { sharedImports } from '../shared/shared-imports';

@Component({
  selector: 'app-welcome',
  imports: [sharedImports],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  title = "영화";
}
