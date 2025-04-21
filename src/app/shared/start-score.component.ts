import { Component,EventEmitter,Output,Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
    selector: 'app-star-score',
    templateUrl: './star-score.component.html',
    styleUrls: ['./star-score.component.scss']
})

export class StarScoreComponent implements OnChanges{
    //Input 프로퍼티를 이용해 부모 컴포넌트의 rating 값을 받아온다.
    //여기서 컨테이너 컴포넌트는 @Input 장식기로 표시된 중첩 컴포넌트 프로퍼티에만 바인딩할 수 있으니 주의해 주세요.
    @Input() rating: number = 0;
    cropWidth: number = 75;
    // @OutPut데코레이터는 오직 프로퍼티가 이벤트일 때만 적용이 가능합니다.
    // 다시 말해 자식 컴포넌트가 데이터를 부모에게 보내는 유일한 방법은 이벤트를 내보내는 것입니다.
    @Output() call : EventEmitter<number> = new EventEmitter();

    ngOnChanges(): void {
        console.log('onchange');
        this.cropWidth = this.rating * 75/5;
    }

    starClick(): void {
        this.call.emit(this.rating);
    }
}

//rating은 부모 컴포넌트에서 가져온 값이고 
//그걸 cropWidth으로 가져와서 계산한다.
//그런 다음에 cropWidth의 값은 rating을 기준으로 다시 계산된다.
//그 계산을 OnChanges 인터페이스를 이용해서 OnChanges 라이프 사이클때
//rating이 바뀔때마다 다시 계산 할수 있도록 만든다.