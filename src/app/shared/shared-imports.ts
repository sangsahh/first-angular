import { NgIf, NgForOf } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConvertPipe } from './convert.pipe';
import { StarScoreComponent } from './start-score.component';
import { RouterModule } from '@angular/router';
export const sharedImports = [
  NgIf,
  NgForOf,
  AsyncPipe,
  DatePipe,
  FormsModule,
  CommonModule,
  ConvertPipe,
  StarScoreComponent,
  RouterModule
  
];