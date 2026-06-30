import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nSelectPipe } from '@angular/common';

const client1 = {
  name: 'Sebastian',
  gender: 'male',
  age: 30,
  address: 'New york, USA'
}

const client2 = {
  name: 'Antonia',
  gender: 'female',
  age: 26,
  address: 'Los angeles, USA'
}

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {
  client = signal(client1);

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient() {
    if (this.client() === client1) {
      this.client.set(client2);
      return
    }
    this.client.set(client1);
  }
}
