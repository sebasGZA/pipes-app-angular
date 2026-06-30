import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroFilter'
})

export class HeroFilterPipe implements PipeTransform {
    transform(list: Hero[], search: string): Hero[] {
        if (!search)
            return list
        return list.filter(l => l.name.toLowerCase().includes(search.toLowerCase()))
    }
}