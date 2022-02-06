import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { MatchDetailComponent } from './pages/match-detail/match-detail.component';
import { MatchesComponent } from './pages/matches/matches.component';
import { TeamComponent } from './pages/team/team.component';
import { WorkInProgressComponent } from './pages/work-in-progress/work-in-progress.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'magazine',
    component: MagazineComponent,

    children: [
      {
        path: '',
        component: MatchesComponent,
        
      },
      {
        path: 'match/:date',
        component: MatchDetailComponent,
      },
    ],
  },
  {
    path: 'team',
    component: TeamComponent,
  },
  
  {
    path: '**',
    component: WorkInProgressComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
