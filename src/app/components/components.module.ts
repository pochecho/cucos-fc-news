import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../chunks/main-header/main-header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeaderComponent } from './header/header.component';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad/ad.component';
import { NewsComponent } from './news/news.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';



@NgModule({
  declarations: [
    ParagraphComponent,
    AdDirective,
    AdComponent,
    NewsComponent,
    RowComponent,
    ColComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ParagraphComponent,
    AdDirective,
    AdComponent,
    NewsComponent,
    RowComponent,
    ColComponent,
  ]
})
export class ComponentsModule { }
