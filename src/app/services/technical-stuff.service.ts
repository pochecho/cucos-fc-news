import { Injectable } from '@angular/core';
import { from, interval, Observable, of, zip } from 'rxjs';
import { IPlayerModel } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class TechnicalStuffService {

  constructor() { }

  getPlayers(): Observable<IPlayerModel> {
    return of(...[
      {
        name: 'Simón Osorio Castaño',
        number: 1,
        role: 'Arquero',
        alias: 'Caco',
      },
      {
        name: 'Manuel Alejandro Zuluaga ',
        number: 5,
        role: 'Mediocampista',
        alias: 'Zulu'
      },
      {
        name: 'Santiago Loaiza Giraldo',
        number: 7,
        role: 'Mediocampista',
        alias: 'Mono',
      },
      {
        name: 'Santiago Rodríguez',
        number: 12,
        role: 'Defensa',
        alias: 'Chokis',
      },
      {
        name: 'Sergio Posada Urrea',
        number: 14,
        role: 'Extremo Derecho',
        alias: 'Pocho',
      },
      {
        name: 'Juan Felipe Ospina',
        number: 17,
        role: 'Volante',
        alias: 'Pildo',
      },
      {
        name: 'Juan Camilo Morales Sánchez ',
        number: 29,
        role: 'Mediocampista Defensivo ',
        alias: 'Mora',
      },
    ] as IPlayerModel[]);
  }
}
