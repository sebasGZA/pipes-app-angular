import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  imports: [CurrencyPipe, DecimalPipe, PercentPipe],
  templateUrl: './numbers-page.component.html',
})
export default class NumbersPageComponent {
  totalSells = signal(2_450_350.2054)
  percent = signal(0.8560)
}
