import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic',
  imports: [LowerCasePipe, TitleCasePipe, UpperCasePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal('sebastian')
  nameUpper = signal('SEBASTIAN')
  fullName = signal('seBasTian gOMez')
}
