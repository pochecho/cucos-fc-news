import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { logEvent } from 'firebase/analytics';
import { concat, Observable, Subscription } from 'rxjs';
import { analytics } from 'src/app/app.configuration';
import { IMatchModel, KindMatch } from 'src/app/models/match.model';
import { IPublicationModel } from 'src/app/models/publication.model';
import { MatchesInformationService } from 'src/app/services/matches-information.service';
import { PublicationInformationService } from 'src/app/services/publication-information.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss'],
})
export class MatchesComponent implements OnDestroy, AfterViewInit, OnInit {
  $lastMatch: Observable<IPublicationModel>;
  $matches: Observable<IPublicationModel>;
  matchesSubscription: Subscription;
  matches: IPublicationModel[];

  @ViewChild('carouselInner', { static: false }) inner: ElementRef;
  images;
  currentIndex = 0;
  constructor(
    private publicationInformationService: PublicationInformationService
  ) {
    this.matches = [];
    this.$matches = concat(
      this.publicationInformationService.getPublicationsByTypeMatch(
        KindMatch.MATCH
      ),
      this.publicationInformationService.getPublicationsByTypeMatch(
        KindMatch.FRIENDLY_MATCH
      )
    );
    this.matchesSubscription = this.$matches.subscribe((data) => {
      this.matches.push(data);
    });
    this.$lastMatch = this.publicationInformationService.getLastPublication();
    this.$lastMatch.subscribe((a) => {
      console.log(a);
    });
  }
  ngOnInit(): void {
    if (environment.analytics) {
      logEvent(analytics, 'magazine.list');
    }
  }
  ngAfterViewInit(): void {
    this.images = this.inner.nativeElement.querySelectorAll('.carousel-item');
    console.log(this.images);
    this.visualizeImage(-1, 0);
  }
  ngOnDestroy(): void {
    this.matchesSubscription.unsubscribe();
  }

  next() {
    this.currentIndex += 1;
    this.visualizeImage(this.currentIndex - 1, this.currentIndex);
  }
  prev() {
    this.currentIndex -= 1;
    this.visualizeImage(this.currentIndex + 1, this.currentIndex);
  }

  visualizeImage(prev, current) {
    this.images[prev]?.classList.toggle('active');
    this.images[current]?.classList.toggle('active');
  }

  players = [
    {
      name: 'Sim??n Osorio Casta??o',
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
      name: 'Santiago Rodr??guez',
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
      name: 'Juan Camilo Morales S??nchez ',
      number: 29,
      role: 'Mediocampista Defensivo ',
      alias: 'Mora',
    },
  ];
}
