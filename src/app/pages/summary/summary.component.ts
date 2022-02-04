import { Component, OnInit } from '@angular/core';
import { IDateModel } from 'src/app/models/date.model';
import { DatesInformationService } from 'src/app/services/dates-information.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  dates: IDateModel[];

  players = [
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
  ];
  constructor(private datesInformationService: DatesInformationService) {
    this.dates = this.datesInformationService.getDatesSummary();
  }

  ngOnInit(): void {}
}
