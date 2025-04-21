import { Injectable } from "@angular/core";
import { movie } from "./movie.model";

@Injectable({
    providedIn: 'root'
})
// 서비스에 Injectable데코레이터를 달아주고, providedIn설정을 'root'로 설정합니다.
// 이 설정을 하면 애플리케이션의 모든 컴포넌트 또는 다른 서비스에서 액세스가 가능해집니다..
export class MovieService {
    getMovies(): movie[] {
        return[
    
            {
                "movieId": 1,
                "name": "matrix4",
                "director": "aa",
                "releaseDate": "2022-01-10",
                "actor": "Keanu Reeves",
                "rate": 4,
                "price": 2.4,
                "imageUrl": "images/matrix.png",
            },
            {
                "movieId": 2,
                "name": "spider-man: No Way Home",
                "director": "bb",
                "releaseDate": "2022-01-17",
                "actor": "tom holland",
                "rate": 3,
                "price":3.0,    
                "imageUrl": "images/spider.png",
            }
        ];
        }
}
// 루트 애플리케이션 인젝터에 등록된 서비스는 애플리케이션의 모든 구성 요소 또는 다른 서비스에서 사용할 수 있습니다.
// 특정 컴포넌트에 등록된 서비스는 해당  컴포넌트와 해당 하위 컴포넌트에서만 사용할 수 있습니다.
// 예를 들어 서비스가 MovieListComponent의 인젝터에 등록된 경우 MovieListComponent와 그 하위 컴포넌트인 StarScoreComponent에서만 서비스를 주입할 수 있습니다.
// 컴포넌트를 앵귤러 모듈에 정의했던 것처럼Angular 모듈에서 서비스를 정의할 필요는 없습니다.
// 그렇다면 언제 루트 인젝터와 컴포넌트 인젝터에 서비스를 등록해야 할까요?
// 루트 인젝터에 서비스를 등록하면 애플리케이션 전체에서 서비스를 사용할 수 있습니다.
// 대부분의 경우 루트 인젝터에 서비스를 등록해 이용합니다.