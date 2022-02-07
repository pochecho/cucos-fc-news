export enum KindMatch {
  TRAINING = 'training',
  FRIENDLY_MATCH = 'friendly-match',
  MATCH = 'match',
}

export interface IMatchModel {
  date: string;
  kind: KindMatch;
  rival: string;
  
  images: { image: string; photographer: string }[];
  audios?: { audio: string; recorder: string }[];
  score: {
    marked: number;
    received: number;
  };
}
