import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlayerModel } from 'src/app/models/player.model';
import { TechnicalStuffService } from 'src/app/services/technical-stuff.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  $players: Observable<IPlayerModel>;
  
  constructor(
    private technicalStuffService: TechnicalStuffService
  ) { }

  ngOnInit(): void {
    this.$players = this.technicalStuffService.getPlayers();
  }

}
