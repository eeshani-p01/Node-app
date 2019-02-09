import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from '../messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent{
  @ViewChild(MessagesComponent) messagesComponent: MessagesComponent;

  onPosted(message){
    this.messagesComponent.messages.push(message);
  }

}
