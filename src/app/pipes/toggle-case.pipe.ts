import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
    transform(value: string, toggle: boolean = true): string {
        return toggle ? value.toUpperCase() : value.toLowerCase()
    }
}