import { Id } from '../account.model';

export interface ChatText {
  // die Id desjenigen, der die Nachhricht verschickt hat wird gespeichert
  senderId: Id;
  content: string;
  time: Date;
}

export interface Chat {
  // Ein Chat hat einen Id, damit er (z.B mit RouterParams) gefunden werden kann
  id: Id;

  // Die Ids der zwei Chat Mitglieder werden gespeichert
  participants: [Id, Id];

  // Die Texte werden in texts geschpeichert
  texts: ChatText[];
}

export interface ChatPartner {
  name: string;
  profilepic: string;
  id: Id;
}

export interface ChatText {
  // die Id desjenigen, der die Nachhricht verschickt hat wird gespeichert
  senderId: Id;
  content: string;
  time: Date;
}

export interface FavoriteChat {
  favoriteProfilepic: string;
  favoriteName: string;
  favoriteId: Id;
}
