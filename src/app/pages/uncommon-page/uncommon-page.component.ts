import { Component, signal } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

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
  imports: [
    CardComponent,
    I18nSelectPipe,
    I18nPluralPipe,
    KeyValuePipe,
    SlicePipe,
    JsonPipe,
    TitleCasePipe,
    UpperCasePipe,
  ],
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

  clientsMap = signal({
    '=0': 'There are no clients waiting',
    '=1': 'There is a client waiting',
    '=2': 'There are 2 clients waiting',
    'other': 'There are # clients waiting'
  })

  clients = signal([
    'Ana',
    'Maria',
    'Sebastian',
    'Juan',
  ])

  deleteClient() {
    this.clients().pop()
  }

  profile = {
    name: 'Sebastian',
    age: 30,
    address: 'New york, USA'
  }
}
