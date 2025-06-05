import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {
  private baseUrl = 'http://localhost:8080/api/user/register';

  constructor(private http: HttpClient) {
   }

  signup(data: FormData) {
    console.log('[MembershipService] signup 호출됨');
    return this.http.post(`${this.baseUrl}`, data);
  }
}
