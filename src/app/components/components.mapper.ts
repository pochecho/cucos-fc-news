import { AdComponent } from './ad/ad.component';
import { AudioComponent } from './audio/audio.component';
import { ColComponent } from './col/col.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { RowComponent } from './row/row.component';
import { VideoComponent } from './video/video.component';

export const COMPONENTS_MAPPER = {
  'app-header': HeaderComponent,
  'app-paragraph': ParagraphComponent,
  'app-ad': AdComponent,
  'app-news': NewsComponent,
  'app-col': ColComponent,
  'app-row': RowComponent,
  'app-audio': AudioComponent,
  'app-video': VideoComponent,
};
