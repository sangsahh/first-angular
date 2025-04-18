import { Component } from "@angular/core";
import { sharedImports } from '../shared/shared-imports';
@Component({
    selector: 'app-movies',
    standalone: true,
    imports: [sharedImports],
    templateUrl: './movie-list.component.html'
})
export class MovieListComponent {
    subTitle: string= '영화리스트';
    imgWidth: number = 55;
    imgMargin: number = 2;
    isImgDisplayed: boolean = false;
    filterText = 'martrix4';
    movies: any[] = [
        {
            "movieId": 1,
            "name": "matrix4",
            "director": "aa",
            "releaseDate": "2022-01-10",
            "actor": "Keanu Reeves",
            "rate": 4,
            "imageUrl": "images/matrix.png",
        },
        {
            "movieId": 2,
            "name": "spider-man: No Way Home",
            "director": "bb",
            "releaseDate": "2022-01-17",
            "actor": "tom holland",
            "rate": 3,
            "imageUrl": "images/spider.png",
        }
    ];
    public toggleImg(): void {
        this.isImgDisplayed = !this.isImgDisplayed;
    }
}