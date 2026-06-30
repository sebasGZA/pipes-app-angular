import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-basic',
  imports: [DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
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
}
