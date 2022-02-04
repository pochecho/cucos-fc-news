import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DateDetailComponent } from './pages/detail-date/detail-date.component';
import { SummaryComponent } from './pages/summary/summary.component';

const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
  },
  {
    path: 'date/:date',
    component: DateDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
