import { Component, OnInit } from '@angular/core';
import { logEvent } from 'firebase/analytics';
import { analytics } from 'src/app/app.configuration';
import { IPlayerModel } from 'src/app/models/player.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  selectedMember;

  team = {
    'technical stuff': {},
    players: [
      {
        name: 'Simón Osorio Castaño',
        number: 1,
        role: 'Arquero',
        alias: 'Caco',
        image: 'assets/players/Simón Osorio Castaño/profile.png'
      },
      {
        name: 'Manuel Alejandro Zuluaga',
        number: 5,
        role: 'Mediocampista',
        alias: 'Zulu',
        image: 'assets/players/Manuel Alejandro Zuluaga/profile.png'

      },

      {
        name: 'Camilo Andrés Loaiza Cardozo',
        number: 6,
        role: 'Mediocampista',
        alias: 'calo',
        image: 'assets/players/Camilo Andrés Loaiza Cardozo/profile.png'

      },
      {
        name: 'Santiago Loaiza Giraldo',
        number: 7,
        role: 'Mediocampista',
        alias: 'Mono',
        image: 'assets/players/Santiago Loaiza Giraldo/profile.jpeg'

      },

      {
        name: 'Sebastián Santamaría Linares',
        number: 9,
        role: 'Delantero Centro ',
        alias: 'Rolo',
        image: 'assets/players/Sebastián Santamaría Linares/profile.png'

      },
      {
        name: 'Juan Manuel Valencia López',
        number: 10,
        role: 'Lateral Izquierdo',
        alias: 'Juanma',
        image: 'assets/players/Juan Manuel Valencia López/profile.png'

      },
      {
        name: 'Santiago Rodríguez Ospina',
        number: 12,
        role: 'Defensa',
        alias: 'Chokis',
        image: 'assets/players/Santiago Rodríguez Ospina/profile.jpeg'
      },
      {
        name: 'Sergio Posada Urrea',
        number: 14,
        role: 'Extremo Derecho',
        alias: 'Pocho',
        image: 'assets/players/Sergio Posada Urrea/profile.jpeg'

      },
      {
        name: 'Juan Felipe Ospina',
        number: 17,
        role: 'Volante',
        alias: 'Pildo',
        image: 'assets/players/Juan Felipe Ospina/profile.png'

      },
      {
        name: 'Juan Camilo Morales Sánchez',
        number: 29,
        role: 'Mediocampista Defensivo ',
        alias: 'Mora',
        image: 'assets/players/Juan Camilo Morales Sánchez/profile.png'

      },
    ] as IPlayerModel[],
  };
  constructor() {}

  ngOnInit(): void {


    if (environment.analytics) {
      logEvent(analytics, 'team');
    }
    
  }
}
