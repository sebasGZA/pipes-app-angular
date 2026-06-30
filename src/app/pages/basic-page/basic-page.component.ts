import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';

import { LocaleService } from '../../services/locale.service';
import { AvailabeLocale } from '../../types/locale.type';

@Component({
  selector: 'app-basic',
  imports: [DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  localeService = inject(LocaleService)

  nameLower = signal('sebastian')
  nameUpper = signal('SEBASTIAN')
  fullName = signal('seBasTian gOMez')

  customDate = signal(new Date());
  tickingDateEffect = effect((onCleanUp) => {
    const interval = setInterval(() => {
      this.customDate.set(new Date())
    }, 1000)
    onCleanUp(() => interval)
  })


  changeLocale(locale: AvailabeLocale) {
    this.localeService.changeLocale(locale)
  }
}
