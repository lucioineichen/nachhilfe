import { Id } from '../account.model';
import { Review } from '../reviews/review.model';

export interface Region {
  city: string;
  zipCode: number;
}

export interface TutoringPlace {
  atStudents: boolean;
  atTutors: boolean;
  online: boolean;
}

// alle Daten in der Klasse Lehrer werden im Feld data gespeichert
export interface Tutor {
  id: Id;
  name: string;
  region: Region;
  age: number;
  tutoringPlace: TutoringPlace;
  hourlyRate: number;
  favorite: boolean;
  profilepics: string[];
  subjects: string[];
  reviews: Review[];
  description: string;
}
