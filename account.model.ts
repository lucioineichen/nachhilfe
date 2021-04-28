import { Tutor } from './lehrer/lehrer.model';
import { Student } from './schueler/schueler.model';

// The id of anything is stored as a number
export type Id = number;

// The interface chatInfo will be used in the account interface to store all the relevant information to connect the user to a specific chat and the other user he chats with
// The id of the chat the chatInfo refers to and the id of the person the user chats with are stored in chatInfo
export interface ChatInfo {
  partnerId: Id;
  chatId: Id;
}

// The type of an account can either be tutor or student
export type AccountType = 'tutor' | 'student';

// Das Interface BaseAccount beschreibt die Daten eines Accounts, die nicht spezifisch einem Accounttyp (Nachhilfelehr oder Schueler) zugeordnet sind
export interface BaseAccount {
  id: Id;

  accountType: AccountType;

  chatsInfo: ChatInfo[];
}

// Das Interface NachhilfelehrerAccount erweiter BaseAccount mit der property data, die Nachhilfelehrer spezifische Daten beschreibt
export interface TutorAccount extends BaseAccount {
  accountType: 'tutor';
  data: Tutor;
}

// Das Interface SchuelerAccount erweiter BaseAccount mit der property data, die Schueler spezifische Daten beschreibt
export interface StudentAccount extends BaseAccount {
  accountType: 'student';
  data: Student;
}

// Der Type Account, beschreibt wie die Daten eines Accounts gespeichert werden
// Er lässt zwei mögliche Varianten dafür zu (Nachhilfelehrer oder Schueler), die aus dem unter Interface (BaseAccount) erweitert wurden
export type Account = TutorAccount | StudentAccount;
