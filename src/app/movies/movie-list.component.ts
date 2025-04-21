import { Component , OnInit } from "@angular/core";
import { sharedImports } from '../shared/shared-imports';
import { movie } from "./movie.model";
import { MovieService } from "./movie.service";
//component 생성
@Component({
    selector: 'app-movies',
    standalone: true,
    imports: [sharedImports],
    templateUrl: './movie-list.component.html',
    //스타일 캡슐화화
    styleUrls: ['./movie-list.component.scss'],
    //컴포넌트에 서비스 등록
    providers: [MovieService]
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
    //필터 처리
    filteredMovies: movie[] = [];
    movies: movie[] = [];
    
    //생성자로 의존성 주입
    constructor(private movieService: MovieService){

    }

    // 이벤트 생성성
    public toggleImg(): void {
        this.isImgDisplayed = !this.isImgDisplayed;
    }
    //OnInit 라이프사이클클 체크
    //OnInit 라이프 사이클에서 movie 서비스로 모든 영화를 가져온후
    //초기 화면에 모든 영화를 보이기 위해 filter에 초기값 저장장
    public ngOnInit(): void {
        this.movies = this.movieService.getMovies();
        this.filteredMovies = this.movies;
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