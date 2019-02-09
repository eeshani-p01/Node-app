import { Component, OnInit } from '@angular/core';
import { MessagesService } from './services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit{

  messages;
  constructor(private messagesService: MessagesService, private route: ActivatedRoute){}
  
  ngOnInit(){
      this.messagesService.getMessages().subscribe(data => {
        this.messages = data;
      });
      console.log(this.route.snapshot.params.name);
  }
}
