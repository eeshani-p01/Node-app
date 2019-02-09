import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services';

@Component({
  selector: 'app-new-messages',
  templateUrl: './new-messages.component.html',
})
export class NewMessagesComponent implements OnInit{

  constructor(private messagesService: MessagesService){}
  
  message = {
    owner: '',
    text: ''
  };
  ngOnInit(){
  
  }

  post(){
    this.messagesService.postMessages(this.message).subscribe();
  }
}
