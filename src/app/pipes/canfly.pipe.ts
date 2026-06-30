import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class CanFlyPipePipe implements PipeTransform {
    transform(value: boolean): string {
        return value ? 'YES' : 'NO'
    }
}