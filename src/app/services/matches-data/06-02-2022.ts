import { IMatchModel } from 'src/app/models/match.model';

export default {
  kind: 'training',
  date: '06-02-2022',
  rival: 'No aplica',
  score: {
    marked: 11,
    received: 11
  },
   images: [
    {
      image: 'assets/dates/06-02-2022/gallery/photo-1.jpeg',
      photographer: 'Elizabeth Betancurth Candamil'
    }
   ],
   audios: [
    {
      audio: 'assets/dates/06-02-2022/audios/mono.mp3',
      recorder: 'Elizabeth Betancurth Candamil'
    }
   ]
} as IMatchModel;
