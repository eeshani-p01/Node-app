import { Component, ViewChild } from '@angular/core';
import { MessagesComponent } from './messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild(MessagesComponent) messagesComponent: MessagesComponent;

  onPosted(message){
    console.log(message);
    this.messagesComponent.messages.push(message);
  }
}
