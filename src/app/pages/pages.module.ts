import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchesComponent } from './matches/matches.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { TeamComponent } from './team/team.component';
import { IndexComponent } from './index/index.component';
import { MagazineComponent } from './magazine/magazine.component';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';



@NgModule({
  declarations: [MatchDetailComponent, MatchesComponent, TeamComponent, IndexComponent, MagazineComponent, WorkInProgressComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [MatchDetailComponent],
})
export class PagesModule { }
