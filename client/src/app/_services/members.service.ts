import { Member } from './../_models/member';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MembersService {
  baseUrl = environment.apiUrl;
  members: Member[] = [];

  constructor(private http: HttpClient) {}

  getMembers() {
    if (this.members.length > 0) return of<Member[]>(this.members);
    return this.http.get<Member[]>(this.baseUrl + 'users').pipe(
      map((members) => {
        this.members = members;
        return members;
      })
    );
  }

  getMember(membername: string) {
    const member = this.members.find((x) => x.userName === membername);
    if (member) return of<Member>(member);
    return this.http.get<Member>(this.baseUrl + 'users/' + membername);
  }

  uodateMember(member: Member) {
    return this.http.put(this.baseUrl + 'users', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = { ...this.members[index], ...member };
      })
    );
  }
}
