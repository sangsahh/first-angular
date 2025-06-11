import { Injectable } from '@angular/core';
import { Client, Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable }from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatboxService {
  
  private stompClient!: Client;  // 또는 private stompClient: Client | undefined;

  constructor(private http: HttpClient) {
    this.stompClient = new Client();  // 생성자 안에서 초기화
  }

  searchUserByEmail(email: string){
    return this.http.get(`/api/users/search?email=${email}`);
  }

  createChatRoom(targetUserId: number): Observable<any>{
    const token = sessionStorage.getItem('jwt');

    const headers =new HttpHeaders({
      'Authorization' : `Bearer ${token}`,
      'Content-Type' : 'application/json'
    });

    const payload = {targetUserId};
    return this.http.post(`/api/chatroom/create`, payload, {headers});
  }

  connect(onMessageReceived: (msg: any) => void) {
    this.stompClient = new Client({
      webSocketFactory: () => new SockJS(`http://localhost:8080/ws?token=${sessionStorage.getItem('jwt')}`),
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
