import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';


export const routes: Routes = [
    { path: 'movie', component: MovieListComponent }  // /movie 경로는 MovieListComponent 보여주기
];
