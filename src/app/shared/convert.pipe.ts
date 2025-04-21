import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'convert'
})
export class ConvertPipe implements PipeTransform {

    transform(value: string, fromChar: string, toChar: string): string {
        return value.replace(fromChar, toChar);

        
    }
}