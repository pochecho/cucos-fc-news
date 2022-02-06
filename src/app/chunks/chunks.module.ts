import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from './main-header/main-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MainHeaderComponent],
  exports: [MainHeaderComponent],
  imports: [CommonModule, RouterModule],
})
export class ChunksModule {}
