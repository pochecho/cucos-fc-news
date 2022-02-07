import { IMatchModel, KindMatch } from 'src/app/models/match.model';

export default {
  kind: KindMatch.FRIENDLY_MATCH,
  date: '27-01-2022',
  rival: 'Vásquez y su Combo',
  score: {},
  images: [
    {
      image: 'assets/dates/26-01-2022/preview.jpeg',
      photographer: 'Daniela Leyton'
    }
  ],
 
} as IMatchModel;
