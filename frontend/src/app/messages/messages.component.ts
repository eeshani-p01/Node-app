import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit{

  messages;
  constructor(private messagesService: MessagesService){}
  
  ngOnInit(){
      this.messagesService.getMessages().subscribe(data => {
        this.messages = data;
      });
  }
}
