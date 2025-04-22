import { Component, OnInit } from '@angular/core';
import { sharedImports } from '../../shared/shared-imports';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  imports: [sharedImports],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.scss'
})
export class MovieDetailComponent implements OnInit {
  title: string = 'Movie Detail';
  //URL에서 매개변수 가져오기
  //1. snapshot 이용
  //컴포넌트가 경로의 매개변수를 한번만 읽어야 할 경우에는 snapshot을 사용하여
  //paramMap에 엑세스하고 매개변수를 가져온다.
  //예시: this.route.snapshot.paramMap.get('id');
  //2. paramMap 구독
  //컴포넌트가 변경될때마다 매개 변수를 다시 취득 해야 될때는 observable paramMap을 사용
  //매개변수 가 변경될때마다 알림을 받기위해서는 observable을 구독해야한다.
  //예를 들어서 상세페이지에 다음 및 이전이 있는경우 페이지는 같지만 경로가 바뀌기 때문에
  //구독을 통해서 매개변수가 변경될때마다 화면에 변경해야할 id를 취득할수 있다.
  //예시: this.route.paramMap.subscribe((params) => {
	// console.log(params.get('id'));
  // });

  //routerLink 대신 코드를 사용해서 라우팅 하는 이유
  //저장 버튼을 누를때 , 데이터가 저장된후 완료 페이지로 이동해야 하는 경우
  //routerLink만으로는 해결하기 어렵기때문이다.
  //코드로 라우팅을 하기 위해 Router서비스를 사용합니다.
  constructor(private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.title += `: ${id}`;
  }

  goTOList(): void{
    //Router인스턴스의 navigate메소드를 사용해서 경로를 이동합니다.
    this.router.navigate(['/movies']);
  }
}
