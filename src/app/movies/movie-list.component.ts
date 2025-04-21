import { Component , OnInit } from "@angular/core";
import { sharedImports } from '../shared/shared-imports';
import { movie } from "./movie.model";
//component 생성
@Component({
    selector: 'app-movies',
    standalone: true,
    imports: [sharedImports],
    templateUrl: './movie-list.component.html',
    //스타일 캡슐화화
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    subTitle: string= '영화리스트';
    imgWidth: number = 55;
    imgMargin: number = 2;
    isImgDisplayed: boolean = false;
    // get,set 만들기기
    private _filterText = '';
    get filterText() : string {
        return this._filterText;
    }
    public set filterText(v : string) {
        this._filterText = v;
        this.filteredMovies = this.performFilter(v);
    }
    
    movies: movie[] = [
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
    //필터 처리
    filteredMovies: movie[] = this.movies;
    // 이벤트 생성성
    public toggleImg(): void {
        this.isImgDisplayed = !this.isImgDisplayed;
    }
    //OnInit 라이프사이클클 체크
    public ngOnInit(): void {
        console.log('앵귤러 라이프사이클: ngOnInit()');
    }
    // filterBy를 매개변수, return값 movie[]
    public performFilter(filterBy: string ): movie[] {
        //비교하기 전에 소문자로 만들어서 비교
        filterBy = filterBy.toLowerCase();
        //영화의 이름을 가져와서 이름을 소문자로 만든후 filterBy와 맞는것이 있다면 리턴함
        return this.movies.filter((movie: movie) => {
            return movie.name.toLocaleLowerCase().includes(filterBy);
        })
    }
    public callFromStar(rating: number){
        console.log("from star: ", rating);
    }    
}