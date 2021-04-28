import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  Account,
  TutorAccount,
  StudentAccount,
  ChatInfo,
  Id,
} from './account.model';
import { Chat, ChatText } from './chat/chat.model';
import { Tutor } from './lehrer/lehrer.model';
import { Student } from './schueler/schueler.model';

@Injectable({
  providedIn: 'root',
})
export class FakebackendService {
  isChatWithLisa: boolean = false;

  private chats: Chat[] = [
    // currentuser & Tim
    {
      id: 12,
      participants: [1, 2],
      texts: [
        {
          senderId: 1,
          content: 'ich bin an Mathe interessiert',
          time: new Date(2021, 1, 18),
        },
        {
          senderId: 2,
          content: 'sehr gerne würde ich dir helfen!',
          time: new Date(),
        },
      ],
    },
    // currentuser & Frank
    {
      id: 13,
      participants: [1, 3],
      texts: [
        {
          senderId: 3,
          content: 'Sind sie an professioneller Chemienachhilfe interessiert?',
          time: new Date(),
        },
      ],
    },
    // currentuser & Lisa
    this.isChatWithLisa
      ? {
          id: 14,
          participants: [1, 4],
          texts: [],
        }
      : null,
  ];

  private currentuserIsStudent: boolean = true;

  private currentuserId = 1;

  private currentuserChatsInfo: ChatInfo[] = [
    // currentuser & Tim
    { chatId: 12, partnerId: 2 },
    // currentuser & Frank
    { chatId: 13, partnerId: 3 },
    // currentuser & Lisa
    this.isChatWithLisa ? { chatId: 14, partnerId: 4 } : null,
  ];

  private currentuser: Account = this.currentuserIsStudent
    ? // Student currentuser
      {
        id: this.currentuserId,
        accountType: 'student',
        chatsInfo: this.currentuserChatsInfo,
        data: {
          id: this.currentuserId,
          name: 'Johan',
          subjects: ['Deutsch'],
          catchwords: [],
          post: {
            title: 'Doitsch',
            comment: 'Ik suge Doitsch Naghilfe',
            date: new Date(10, 8, 2021),
          },
          profilepics: [],
          favorites: [2, 3],
        },
      }
    : // Tutor currentuser
      {
        id: this.currentuserId,
        accountType: 'tutor',
        chatsInfo: this.currentuserChatsInfo,
        data: {
          id: this.currentuserId,
          name: 'Johan',
          region: {
            city: 'Meilen',
            zipCode: 8706,
          },
          age: 14,
          tutoringPlace: {
            atStudents: true,
            atTutors: false,
            online: true,
          },
          hourlyRate: 15,
          favorite: true,
          profilepics: [
            'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fa%2Fa5%2FJohan_Lib%25C3%25A9reau.jpg&f=1&nofb=1',
          ],
          subjects: ['Mathe'],
          reviews: [],
          description: 'Ik bin gut in der Mathe und habe aine Seks',
        },
      };

  private accounts: Account[] = [
    // Tim
    {
      id: 2,
      accountType: 'tutor',
      chatsInfo: [{ chatId: 12, partnerId: 1 }],
      data: {
        id: 2,
        name: 'Tim',
        region: {
          city: 'Männedorf',
          zipCode: 8708,
        },
        age: 17,
        tutoringPlace: {
          atStudents: true,
          atTutors: true,
          online: true,
        },
        hourlyRate: 25,
        favorite: false,

        profilepics: [
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.businessinsider.com%2Fimage%2F5748e7cc52bcd0320c8c5a80%2Fimage.jpg&f=1&nofb=1',
        ],
        subjects: ['Mathe', 'Chemie', 'Physik'],

        reviews: [
          {
            senderId: 1,
            date: new Date(1, 1, 2021),
            rating: 5,
            title: 'Sehr Gut!',
            comment: 'Auf allen Ebenen gut.',
          },
        ],
        description: `►►Flexible Terminvereinbarung◄◄
      ►►Total über 4500 Stunden Erfahrung im Unterrichten◄◄
      Haben Sie Schwierigkeiten? Mathematik kann schwierig sein, muss aber nicht. Ich bin in der Lage das Fach Intuitiv und mit viele Beispiele beizubringen, was in der Schule/Uni nicht immer passiert. Ich habe gerade den Master’s von Fachhoch Schule Schweiz erfolgreich abgeschlossen (Hauptfächer Mathematik, Physik und Informatik). Ich habe seit mehrere Jahren Nachhilfe für Schüler bis auf Niveau Uni gerne geholfen`,
      },
    },
    // Frank
    {
      id: 3,
      accountType: 'tutor',
      chatsInfo: [],
      data: {
        id: 3,
        name: 'Frank',
        region: {
          city: 'Meilen',
          zipCode: 8706,
        },
        age: 34,
        tutoringPlace: {
          atStudents: true,
          atTutors: true,
          online: false,
        },
        hourlyRate: 35,
        favorite: false,
        profilepics: [
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.promipool.de%2Fwww-promipool-de%2Fimage%2Fupload%2Fc_fit%2Ch_1200%2Cw_1200%2Fq_auto%3Aeco%2Ff_jpg%2FFrank_Rosin_fktysfr4rt&f=1&nofb=1',
        ],
        subjects: ['Biologie', 'Wirtschaft'],
        reviews: [],
        description: '',
      },
    },
    // Lisa
    {
      id: 4,
      accountType: 'tutor',
      chatsInfo: [],
      data: {
        id: 4,
        name: 'Lisa',
        region: {
          city: 'Meilen',
          zipCode: 8706,
        },
        age: 18,
        tutoringPlace: {
          atStudents: true,
          atTutors: false,
          online: true,
        },
        hourlyRate: 170,
        favorite: null,
        profilepics: [
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthefappeningnew.com%2Fwp-content%2Fuploads%2F2018%2F12%2FLisa-Opie__thefappeningnew_com-4.jpg&f=1&nofb=1',
        ],
        subjects: ['Sport'],
        reviews: [
          {
            senderId: 1,
            date: new Date(1, 1, 2021),
            rating: 5,
            title: 'Sehr Gut!',
            comment: 'Auf allen Ebenen gut.',
          },
        ],
        description: '',
      },
    },
    // currentuser
    this.currentuser,
  ];

  constructor() {}

  // deepCopy returns an Objekt, who's, including deeply nested properties, are cloned
  private deepCopy(obj: any) {
    let copy: any;

    // primitives, null oder undefined
    if (null == obj || 'object' != typeof obj) return obj;

    // Dates
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Arrays
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepCopy(obj[i]);
      }
      return copy;
    }

    // Objects
    if (obj instanceof Object) {
      copy = {};
      for (let attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = this.deepCopy(obj[attr]);
      }
      return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
  }

  addFavorite(tutorId: Id) {
    // Adds the tutor to the favorites Array of the currentuser
    const favorites = (this.currentuser.data as Student).favorites;
    if (!favorites.includes(tutorId)) {
      favorites.push(tutorId);
    }
  }

  deleteFavorite(tutorId: Id) {
    // filters the tutor out of the favorites array of the currentuser
    const user = this.currentuser.data as Student;
    user.favorites = user.favorites.filter((favorite) => {
      return !(favorite === tutorId);
    });
  }

  createChat(chatParticipants: [Id, Id]): Observable<number> {
    // creates a random id for the chat
    // possible numbers for the id are integers between 10'000 and 99'999
    const chatId = Math.floor(Math.random() * 89999 + 10000);

    const chat: Chat = {
      id: chatId,
      participants: chatParticipants,
      texts: [],
    };

    this.chats.push(chat);

    const accounts = this.accounts;

    let success = 0;

    // adds to the chatInfo to the chat participants accounts
    for (let acc of accounts) {
      if (acc.id === chatParticipants[0]) {
        acc.chatsInfo.push({
          partnerId: chatParticipants[1],
          chatId: chatId,
        });
        success += 1;
        if (success >= 2) {
          break;
        }
      } else if (acc.id === chatParticipants[1]) {
        acc.chatsInfo.push({
          partnerId: chatParticipants[0],
          chatId: chatId,
        });
        success += 1;
        if (success >= 2) {
          break;
        }
      }
    }

    return new Observable<number>((observer) => {
      observer.next(chatId);
      observer.complete();
    });
  }

  addChatToCurrentuser(chatId: Id, partnerId: Id) {
    this.currentuser.chatsInfo.push({
      chatId: chatId,
      partnerId: partnerId,
    });
  }

  addText(chatId: Id, text: ChatText) {
    for (let chat of this.chats.filter((chat) => {
      return chat ? true : false;
    })) {
      if (chat.id === chatId) {
        chat.texts.push(text);
        break;
      }
    }
  }

  getAccounts(params?: any): Account[] {
    // Imitiert Backend call
    if (params) {
      console.log('Finde Accounts mit', params);
    }

    return this.deepCopy(this.accounts);
  }

  getTutor(id: Id): Tutor {
    for (let acc of this.accounts) {
      if (acc.id === id) {
        if (acc.accountType === 'tutor') {
          return this.deepCopy(acc.data);
        }
        throw new Error('ID gehört zu einem SchuelerAccount');
      }
    }
    throw new Error('ID passt zu keinem Account');
  }

  getTutors(params?: any): Tutor[] {
    // Imitiert Backend call
    if (params) {
      console.log('Finde Lehrer mit', params);
    }

    return (this.deepCopy(this.accounts).filter((acc: Account) => {
      return acc.accountType === 'tutor';
    }) as TutorAccount[]).map((lehrerAcc) => {
      return lehrerAcc.data;
    });
  }

  getAccount(id: Id): Account {
    for (let acc of this.accounts) {
      if (acc.id === id) {
        return this.deepCopy(acc);
      }
    }
    return null;
  }

  getChats() {
    return this.deepCopy(this.chats);
  }

  getChat(id: Id): Chat {
    for (let chat of this.chats.filter((chat) => chat)) {
      if (chat.id === id) {
        return this.deepCopy(chat);
      }
    }
    return null;
  }

  getCurrentuser(): Account {
    return this.deepCopy(this.currentuser);
  }

  getStudentAccounts(currentuserId: number): StudentAccount[] {
    console.log(
      'Imitate backend call "getSchuelerAccount(currentuserId: number)" with params: ',
      currentuserId
    );
    return this.deepCopy(
      this.accounts.filter((acc) => {
        return acc.accountType === 'student';
      })
    ) as StudentAccount[];
  }
}
