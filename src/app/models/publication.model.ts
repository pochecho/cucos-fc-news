import { IMatchModel } from './match.model';


export interface IPublicationModel {
  match: IMatchModel;
  title: string;
  abstract: string;
  publicationDate: string;
  author: string;
  body: any;
}
