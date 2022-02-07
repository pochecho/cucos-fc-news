import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { KindMatch } from 'src/app/models/match.model';
import { MatchesInformationService } from 'src/app/services/matches-information.service';
import { PublicationInformationService } from 'src/app/services/publication-information.service';

@Component({
  selector: 'app-magazine',
  templateUrl: './magazine.component.html',
  styleUrls: ['./magazine.component.scss'],
})
export class MagazineComponent implements OnInit, OnDestroy {
  trainings = [];
  trainingSubscription: Subscription;
  constructor(private publicationInformationService: PublicationInformationService) {
    this.trainingSubscription = this.publicationInformationService
      .getPublicationsByTypeMatch(KindMatch.TRAINING)
      .subscribe((data) => {
        this.trainings.push(data);
        
      });
  }
  ngOnDestroy(): void {
    this.trainingSubscription.unsubscribe();
  }

  ngOnInit(): void {}
}
