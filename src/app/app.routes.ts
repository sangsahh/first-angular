import { Routes } from '@angular/router';
import { MovieListComponent } from './movies/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { movieDetailGuard } from './movies/movie-detail/movie-detail.guard';


export const routes: Routes = [
    // { path: 'movies', component: MovieListComponent },  // /movie 경로는 MovieListComponent 보여주기
    // //MovieDetailComponent의 경로 정의에 canActivate속성을 추가하고 가드 담당 클래스를 배열로 추가 하였습니다.
    // {path: 'movies/:id',
    //     canActivate:[movieDetailGuard], component: MovieDetailComponent},//'movies/:id'와 같이 / : 후 표시자를 사용해서 매개변수를 정의할 수 있습니다.
    { 
        path: 'movies', 
        loadChildren: () => import('./movies/movie.module').then(m => m.MovieModule) 
      },
    {path: 'welcome', component: WelcomeComponent},
    {path: '', redirectTo: 'welcome', pathMatch: 'full'}, //아무것도 없을 경우에는 디폴트로 welcome path로 강제로 이동
    {path: '**', component: WelcomeComponent} //다른게 나올겨우 404 notfound로 이동
];
