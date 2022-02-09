import { Component, OnInit } from '@angular/core';
import { logEvent } from 'firebase/analytics';
import { Observable } from 'rxjs';
import { IPlayerModel } from 'src/app/models/player.model';
import { TechnicalStuffService } from 'src/app/services/technical-stuff.service';
import { environment } from 'src/environments/environment';
import { analytics } from '../../app.configuration';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  $players: Observable<IPlayerModel>;
  constructor(private technicalStuffService: TechnicalStuffService) {}

  ngOnInit(): void {
    if (environment.analytics) {
      console.log('se manda');
      logEvent(analytics, 'index');
    }
    this.$players = this.technicalStuffService.getPlayers();
  }
}
