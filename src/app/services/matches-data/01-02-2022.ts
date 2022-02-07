import { IMatchModel, KindMatch } from 'src/app/models/match.model';

export default {
  date: '02-02-2022',

  kind: KindMatch.FRIENDLY_MATCH,
  rival: 'Vásquez y su Combo',
  score: {
    marked: 10,
    received: 5,
  },
  images: [
    {
      image: 'assets/dates/01-02-2022/preview.jpeg',
      photographer: 'Daniela Leyton'
    }
  ],
  
} as IMatchModel;
