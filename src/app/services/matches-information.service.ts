import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DATA } from './publications-data/data';
import { DATA as MATCHES_DATA } from './matches-data/data';
import { IMatchModel, KindMatch } from '../models/match.model';
import { max } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class MatchesInformationService {
  constructor() {}

  getLastMatch(): Observable<IMatchModel> {
    return of(
      ...Object.entries(MATCHES_DATA).map((date: any) => {
        return {
          date: date[0],
          preview: date[1].preview,
          images: date[1].images,
          kind: date[1].kind,
          rival: date[1].rival,
          score: date[1].score,
        };
      })
    ).pipe(
      max<IMatchModel>((a: IMatchModel, b: IMatchModel) =>
        new Date(a.date) < new Date(b.date) ? -1 : 1
      )
    );
  }
  getAllMatchesByType(kind: KindMatch): Observable<IMatchModel> {
    return of(
      ...Object.entries(DATA)
        .map((date: any) => {
          return {
            date: date[0],
            preview: date[1].preview,
            kind: date[1].kind,
            score: date[1].score,
            rival: date[1].rival,
            images: date[1].images,
          };
        })
        .filter((item) => item.kind == kind)
    );
  }

  getPublicationByMatch(date: string) {
    return DATA[date];
  }
}
