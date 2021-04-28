import { ChatsService } from './../nachrichten/chats.service';
import { Observable } from 'rxjs';
import { StudentAccount, TutorAccount, Id } from './../account.model';
import { FakebackendService } from '../fakebackend.service';
import { Injectable } from '@angular/core';
import { Chat, ChatPartner, ChatText } from './chat.model';
import { Account } from '../account.model';
import { Student } from '../schueler/schueler.model';
import { Tutor } from '../lehrer/lehrer.model';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private backend: FakebackendService,
    private chatsService: ChatsService
  ) {}

  getChatAndPartner(chatId: Id): { chat: Chat; partner: ChatPartner } {
    const chat: Chat = this.backend.getChat(chatId);
    const currentuserId = this.backend.getCurrentuser().id;
    const partnerId =
      chat.participants[0] === currentuserId
        ? chat.participants[1]
        : chat.participants[0];
    const partner: Student | Tutor = this.backend.getAccount(partnerId).data;
    return {
      chat: chat,
      partner: {
        name: partner.name,
        profilepic: partner.profilepics[0],
        id: partner.id,
      },
    };
  }

  sendText(chatId: Id, text: ChatText) {
    this.backend.addText(chatId, text);
    // wenn ein Text gesendet oder ein Chat erstellet wird (die Erstellung eines Chats erfolgt durch das sendens eines ersten Textes zwischen zwei Personen), verändert sich die ChatVorschau (eine anderer letzter Text muss angezeigt werden oder ein neuer Chat muss angezeigt werden), weswegen der ChatVorschau mitgeteilt wird, dass sie sich updaten muss
    this.chatsService.tellToUpdateChatPreivew();
  }

  createChat(partnerId: Id): Observable<Id> {
    const chatId = this.backend.createChat([
      partnerId,
      this.backend.getCurrentuser().id,
    ]);

    return chatId;
  }

  getCurrentuserId(): Id {
    return this.backend.getCurrentuser().id;
  }

  getCurrentuser(): Account {
    return this.backend.getCurrentuser();
  }
}
