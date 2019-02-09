import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  messages = [
    {
      text: 'Some text',
      owner: 'Eeshani Patel'
    },
    {
      text: 'Some New Text',
      owner: 'Mr, Json'
    }
  ];
}
