import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../chunks/main-header/main-header.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { HeaderComponent } from './header/header.component';
import { AdDirective } from './ad.directive';
import { AdComponent } from './ad/ad.component';
import { NewsComponent } from './news/news.component';
import { RowComponent } from './row/row.component';
import { ColComponent } from './col/col.component';
import { AudioComponent } from './audio/audio.component';
import { VideoComponent } from './video/video.component';



@NgModule({
  declarations: [
    ParagraphComponent,
    AdDirective,
    AdComponent,
    NewsComponent,
    RowComponent,
    ColComponent,
    AudioComponent,
    VideoComponent,
  ],
  imports: [
    CommonModule,

  ],
  exports:[
    ParagraphComponent,
    AdDirective,
    AdComponent,
    NewsComponent,
    RowComponent,
    ColComponent,
    AudioComponent,

  ],
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ComponentsModule { }
