//앵귤러 라우터는 경로 탐색을 보호하기 위한 CanActivate, 
// 현재 경로에서 벗어나는걸 보호하기 위한 CanDeactivate, 
// 경로를 활성화하기 전에 데이터를 프리패치 하기위한 Resolve, 
// 비동기 라우팅 방지하기 위한 CanLoad등 여러가지 보호 기능을 제공하고 있습니다.
//ng g g movies/movie-detail/movie-detail
//을 이용하면 쉽게 라우트 가드를 만들수 있다.
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

//가드는 서비스이므로 앵귤러 인젝터에 등록해야합니다.
//하지만 이것은 클래스 가드인 경우 필요하지만
//라우트 가드 인경우에는 15부터 필요 없게 되었다.
// @Injectable({
//   providedIn: 'root'
// })

//클래스 형식으로 쓸수 있지만 15버전부터는 함수형식으로 쓰는걸 권장장
// export class movieDetailGuard implements CanActivate{

//   constructor(private router: Router){}
//   //Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 가 MaybeAsync<GuardResult>로
//   //15버전으로 오면서 바뀌게 되었다. 
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//     const id = Number(route.paramMap.get('id'));
//     if(isNaN(id) || id<1) {
//       alert('Invalid movie id');
//       this.router.navigate(['/movies']);
//       return false;
//     }
//     return true;
//   }
// }

//15부터는 자동으로 생성되어 클래스를 따로 만들 필요가 없다
//15버전부터는 이런 형식으로 클래스 대신 함수를 사용하게 된다.
export const movieDetailGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const router = inject(Router);

  const id = Number(route.paramMap.get('id'));
  if(isNaN(id) || id < 1){
    alert('Invalid movie id');
    router.navigate(['movies']);
    return false;
  }
  return true;
};
