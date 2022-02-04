import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeaderComponent } from './header/header.component';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad/ad.component';
import { NewsComponent } from './news/news.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';



@NgModule({
  declarations: [
    BannerComponent,
    ParagraphComponent,
    HeaderComponent,
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
    BannerComponent,
    ParagraphComponent,
    HeaderComponent,
    AdDirective,
    AdComponent,
    NewsComponent,
    RowComponent,
    ColComponent,
  ]
})
export class ComponentsModule { }
