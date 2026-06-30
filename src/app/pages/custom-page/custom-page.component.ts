import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipePipe } from '../../pipes/canfly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { HeroSortByPipe } from '../../pipes/hero-sortby.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../pipes/hero-filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe, 
    CanFlyPipePipe, 
    HeroColorPipe, 
    HeroCreatorPipe,
    HeroSortByPipe,
    HeroTextColorPipe,
    HeroFilterPipe,
    TitleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('sebastian')
  upper = signal(true)

  heroes = signal(heroes)
  sortBy = signal<keyof Hero | null>(null)

  search = signal('')
}
