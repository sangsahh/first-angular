import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { movieDetailGuard } from './movie-detail/movie-detail.guard';


//15부터는 모듈로 작업하기 보다는 standalone을 이용해서 컴포넌트 안에서 
//원하는 기능을 알아서 import하는 식으로 만들기 때문에 모듈이 필요없다 
//하지만 큰 프로젝트에서 라우팅을 나누거나 lazy load를 하기 위해서 같이 쓰기도 한다.
//지금 파일 처럼 movie 관련 url을 따로 나눠서 관리하거나 해서 app.routes의 몰림 현상을 줄여준다.
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: MovieListComponent},
      {path: ':id', canActivate: [movieDetailGuard],
        component: MovieDetailComponent
      },
    ]),
  ]
})
export class MovieModule { }
