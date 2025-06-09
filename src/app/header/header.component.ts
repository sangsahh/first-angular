import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { sharedImports } from '../shared/shared-import';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,sharedImports],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



}
