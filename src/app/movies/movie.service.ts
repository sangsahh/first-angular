import { Injectable } from "@angular/core";
import { movie } from "./movie.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError, Observable, tap, throwError } from "rxjs";

@Injectable({
    providedIn: 'root',
})
// 서비스에 Injectable데코레이터를 달아주고, providedIn설정을 'root'로 설정합니다.
// 이 설정을 하면 애플리케이션의 모든 컴포넌트 또는 다른 서비스에서 액세스가 가능해집니다..
export class MovieService {
    private movieUrl = 'json/movies.json';
    //http통신을 하기 위해서 Angular의 HttpClient가 필요로 합니다.
    //의존성으로 서비스를 주입하기 위해선 해당 서비스 공급자를 Angular의 인젝터에 등록해야 하는데,  
    // HTTP 서비스 공급자 등록은 HttpClientModule에서 이루어집니다. 
    constructor (private http: HttpClient) {}
    //http get 메서드는 제네릭 매개 변수를 설정하여 response의 예상 유형을 지정합니다.
    //제네릭 매개 변수를 사용하면 메서드가 작동하는 데이터의 유형을 정의할 수 있습니다. 
    // Movie[]을 예상하기 때문에 제네릭 매개 변수를 Movie[]로 설정 했습니다.
    //http.get 메서드는 관찰 가능한 값을 반환하므로, 응답이 백엔드 서버에서 반환될 때 알림을 받게 됩니다.
    getMovies(): Observable<movie[]> {
        return this.http.get<movie[]>(this.movieUrl).pipe(
            //연산자를 사용하기 위해서는 Observable의 pipe메서드를 사용해야 합니다.
            //tap은 Observable 스트림에서 방출된 값을 볼 수 있도록 해줍니다.
            tap(data => console.log(JSON.stringify(data))),
            //pipe에 쉼표를 한 후 두 번째 연산자인 catchError를 추가하고 있습니다.
            //catchError는 Error를 탐지해주는 연산자입니다.
            //코드에서는 catchError 연산자는 에러가 검출됐을 시 
            //다시 handleError메서드를 이용해 에러 처리에 관련된 로직을 수행하게 만들었습니다.
            catchError(this.handleError)
        );
        }
        //handleError 에러 함수
        private handleError(error: HttpErrorResponse){
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                errorMessage = `error: ${error.error.message}`;
            }else {
                errorMessage = `return code: ${error.status}, message:${error.message}`
            }
            return throwError(() => new Error(errorMessage));
        }
}
// 루트 애플리케이션 인젝터에 등록된 서비스는 애플리케이션의 모든 구성 요소 또는 다른 서비스에서 사용할 수 있습니다.
// 특정 컴포넌트에 등록된 서비스는 해당  컴포넌트와 해당 하위 컴포넌트에서만 사용할 수 있습니다.
// 예를 들어 서비스가 MovieListComponent의 인젝터에 등록된 경우 MovieListComponent와 그 하위 컴포넌트인 StarScoreComponent에서만 서비스를 주입할 수 있습니다.
// 컴포넌트를 앵귤러 모듈에 정의했던 것처럼Angular 모듈에서 서비스를 정의할 필요는 없습니다.
// 그렇다면 언제 루트 인젝터와 컴포넌트 인젝터에 서비스를 등록해야 할까요?
// 루트 인젝터에 서비스를 등록하면 애플리케이션 전체에서 서비스를 사용할 수 있습니다.
// 대부분의 경우 루트 인젝터에 서비스를 등록해 이용합니다.