import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Chat, ChatPartner, ChatText } from './chat.model';
import { ChatService } from './chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  partner: ChatPartner;
  chat: Chat;

  constructor(private cs: ChatService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const chatUndPartner = this.cs.getChatAndPartner(
        parseInt(params.get('id'))
      );
      this.chat = chatUndPartner.chat;
      this.partner = chatUndPartner.partner;
    });
  }

  sendText(content: string) {
    const participants = this.chat.participants;
    const senderId =
      participants[0] === this.partner.id ? participants[1] : participants[0];

    const text: ChatText = {
      content: content,
      senderId: senderId,
      time: new Date(),
    };
    this.chat.texts.push(text);
    this.cs.sendText(this.chat.id, text);
  }
}
