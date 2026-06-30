import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { CanFlyPipePipe } from '../../pipes/canfly.pipe';
import { HeroColorPipe } from '../../pipes/hero-color.pipe';
import { HeroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { HeroCreatorPipe } from '../../pipes/hero-creator.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe, 
    CanFlyPipePipe, 
    HeroColorPipe, 
    HeroCreatorPipe,
    HeroTextColorPipe,
    TitleCasePipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {
  name = signal('sebastian')
  upper = signal(true)

  heroes = signal(heroes)
}
