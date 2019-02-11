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
      var param = this.route.snapshot.params;
      if(param && (Object.keys(param).length === 0)){
        this.messagesService.getMessages().subscribe(data => {
          this.messages = data;
        });
      }else{
        this.messagesService.getMessages(param.name).subscribe(data => {
          this.messages = data;
        });
      }
  }
}
