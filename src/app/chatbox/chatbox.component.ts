import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { sharedImports } from '../shared/shared-import';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  @ViewChild('userSearchModal') userSearchModal:any;
  searchEmail = '';
  searchResults: any[] = [];
  messages: any[] = [];
  newMessage = '';
  username = 'User1';


  constructor(private chatboxService: ChatboxService, private modalService: NgbModal) {}

  openUserSearchModal() {
    this.modalService.open(this.userSearchModal);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  searchUser(){
    this.chatboxService.searchUserByEmail(this.searchEmail).subscribe((res: any) => {
      this.searchResults = res;
    })
  }

  createChatRoom(userId: number){
    this.chatboxService.createChatRoom(userId).subscribe(() => {
      alert('채팅방이 생성되었습니다.');
      this.closeModal();
    })
  }

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
