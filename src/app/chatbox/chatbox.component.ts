import { AfterViewInit, Component } from '@angular/core';
import { sharedImports } from '../shared/shared-import';
import { HttpClientModule } from '@angular/common/http';
import { ChatboxService } from './chatbox.service';
@Component({
  selector: 'app-chatbox',
  standalone: true,
  imports: [HttpClientModule, sharedImports],
  templateUrl: './chatbox.component.html',
  styleUrl: './chatbox.component.scss',
  providers: [ChatboxService]
})
export class ChatboxComponent {
  messages: any[] = [];
  newMessage = '';
  username = 'User1';


  constructor(private chatboxService: ChatboxService) {}

  ngOnInit() {
    this.chatboxService.connect(msg => {
      this.messages.push(msg);
    });
  }

  send() {
    if (this.newMessage.trim()) {
      this.chatboxService.sendMessage({
        sender: this.username,
        content: this.newMessage,
      });
      this.newMessage = '';
    }
  }

}
