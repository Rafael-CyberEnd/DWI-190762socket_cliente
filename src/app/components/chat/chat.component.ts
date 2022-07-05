import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto='';
  mensajesSubscription: Subscription = new Subscription;

  constructor(
    public chatService: ChatService
  ) { }

  ngOnInit(): void {
    this.mensajesSubscription = 
    this.chatService.getMessage().subscribe(
      msg =>
      {
        console.log(msg);
      }
    );
  }

  enviar(){
    this.chatService.sendMessage(this.texto);
    this.texto='';
  }

  ngOnDestroy(): void{
    this.mensajesSubscription.unsubscribe();
  }

}
