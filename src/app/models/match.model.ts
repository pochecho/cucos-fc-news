export enum KindMatch {
  TRAINING = 'training',
  FRIENDLY_MATCH = 'friendly-match',
  MATCH = 'match',
}

export interface IMatchModel {
  date: string;
  kind: KindMatch;
  rival: string;
  preview: { image: string; photographer: string };
  images: { image: string; photographer: string }[];
  score: {
    marked: number;
    received: number;
  };
}
