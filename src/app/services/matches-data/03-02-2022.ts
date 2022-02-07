import { IMatchModel } from 'src/app/models/match.model';

export default {
  kind: 'friendly-match',
  date: '03-02-2022',
  rival: 'Luis y su combo',
  score: {
    marked: 7,
    received: 5
  },
   images: [
    {
      image: 'assets/dates/03-02-2022/gallery/photo-1.jpeg',
      photographer: 'Daniela Leyton'
    }
   ],
  
} as IMatchModel;
