import { Injectable, signal } from '@angular/core';

import { AvailabeLocale } from '../types/locale.type';

@Injectable({ providedIn: 'root' })
export class LocaleService {
    private currentLocale = signal<AvailabeLocale>('en');

    constructor() {
        this.currentLocale.set(
           ( localStorage.getItem('locale')) as AvailabeLocale ?? 'en'
        )
    }

    get getLocale() {
        return this.currentLocale()
    }

    changeLocale(locale: AvailabeLocale) {
        localStorage.setItem('locale', locale);
        this.currentLocale.set(locale)
        window.location.reload();
    }

}