import { Component, OnInit } from '@angular/core';
import { IPlayerModel } from 'src/app/models/player.model';

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
      },
      {
        name: 'Manuel Alejandro Zuluaga ',
        number: 5,
        role: 'Mediocampista',
        alias: 'Zulu',
      },
      {
        name: 'Santiago Loaiza Giraldo',
        number: 7,
        role: 'Mediocampista',
        alias: 'Mono',
      },

      {
        name: 'Sebastián Santamaría',
        number: 9,
        role: 'Delantero Centro ',
        alias: 'Rolo',
      },
      {
        name: 'Juan Manuel Valencia López',
        number: 10,
        role: 'Lateral Izquierdo',
        alias: 'Juanma',
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
      },
      {
        name: 'Juan Camilo Morales Sánchez ',
        number: 29,
        role: 'Mediocampista Defensivo ',
        alias: 'Mora',
      },
    ] as IPlayerModel[],
  };
  constructor() {}

  ngOnInit(): void {}
}
