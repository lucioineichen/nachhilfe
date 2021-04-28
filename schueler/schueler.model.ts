import { Id } from '../account.model';

// Post stores the information of the post the student post on the infoboard
export interface Post {
  title: string;
  comment: string;
  date: Date;
}

// Das Schüler Interface beschreibt, wie schülerspezifische Daten gespeichert werden
export interface Student {
  id: Id;
  name: string;
  subjects: string[];
  catchwords: string[];
  post: Post;
  profilepics: string[];
  favorites: Id[];
}
