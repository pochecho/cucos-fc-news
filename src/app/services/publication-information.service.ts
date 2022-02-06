import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { max } from 'rxjs/operators';
import { IMatchModel, KindMatch } from '../models/match.model';
import { IPublicationModel } from '../models/publication.model';
import { DATA } from './publications-data/data';

@Injectable({
  providedIn: 'root',
})
export class PublicationInformationService {
  constructor() {}

  getPublicationByMatch(match: IMatchModel): Observable<IPublicationModel> {
    return of(
      ...Object.entries(DATA)
        .filter((item) => item[1].match as IMatchModel == match)
        .map((date: any) => {
          return {
            date: date[0],
            match: date[1].match as IMatchModel,
            body: date[1].body,
            title: date[1].title,
            abstract: date[1].abstract,
            publicationDate: date[1].publicationDate,
            author: date[1].author,
          };
        })
    );
  }

  getPublicationsByTypeMatch(kindMatch: KindMatch): Observable<IPublicationModel> {
    return of(
      ...Object.entries(DATA)
        .filter((item) => (item[1].match as IMatchModel).kind == kindMatch)
        .map((date: any) => {
          return {
            date: date[0],
            match: date[1].match as IMatchModel,
            body: date[1].body,
            title: date[1].title,
            abstract: date[1].abstract,
            publicationDate: date[1].publicationDate,
            author: date[1].author,
          };
        })
    );
  }

  getLastPublication(): Observable<IPublicationModel> {
    return of(
      ...Object.entries(DATA).map((date: any) => {
        return {
          date: date[0],
          match: date[1].match as IMatchModel,
          body: date[1].body,
          title: date[1].title,
          abstract: date[1].abstract,
          publicationDate: date[1].publicationDate,
          author: date[1].author,
        };
      })
    ).pipe(
      max<IPublicationModel>((a: IPublicationModel, b: IPublicationModel) =>
        new Date(a.publicationDate) < new Date(b.publicationDate) ? -1 : 1
      )
    );
  }
}