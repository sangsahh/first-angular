import { Injectable } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {

  constructor(private stompClient: Client) { }

  connect(onMessageReceived: (msg: any) => void) {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
      debug: str => console.log(str),
      onConnect: () => {
        this.stompClient.subscribe('/topic/public', message => {
          onMessageReceived(JSON.parse(message.body));
        });
      },
    });

    this.stompClient.activate();
  }

  sendMessage(msg: { sender: string; content: string }) {
    this.stompClient.publish({
      destination: '/app/chat.sendMessage',
      body: JSON.stringify(msg),
    });
  }

  
}
