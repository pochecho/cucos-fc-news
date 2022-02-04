import { Injectable } from '@angular/core';
import { IDateModel } from '../models/date.model';
import { DATA } from './data/data';

@Injectable({
  providedIn: 'root',
})
export class DatesInformationService {
  constructor() {}

  getDatesSummary(): IDateModel[] {
console.log(DATA);

    return Object.entries(DATA).map((date: any) => {
      return {
        date: date[0],
        preview: date[1].preview,
        abstract: date[1].abstract,
        title: date[1].title,
        publicationDate: date[1].publicationDate,
      };
    });
  }

  getDetailByDate(date: string) {
    return DATA[date];
  }
}
