import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateDetailComponent } from './detail-date/detail-date.component';
import { SummaryComponent } from './summary/summary.component';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [DateDetailComponent, SummaryComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule
  ],
  exports: [DateDetailComponent],
})
export class PagesModule { }
