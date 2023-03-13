import { ToastrModule, ToastrService } from 'ngx-toastr';
import { MembersService } from './../../_services/members.service';
import { AccountService } from './../../_services/account.service';
import { Member } from './../../_models/member';
import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { take } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
})
export class MemberEditComponent implements OnInit {
  member: Member | undefined;
  user: User | null = null;

  @ViewChild('editForm') editForm: NgForm | undefined;
  @HostListener('window:beforeunload', ['$event']) unloadNotification(
    $event: any
  ) {
    if (this.editForm?.dirty) {
      $event.returnValue = true;
    }
  }

  constructor(
    private accountService: AccountService,
    private memberService: MembersService,
    private toaster: ToastrService
  ) {
    this.accountService.currentUser$.pipe(take(1)).subscribe({
      next: (user) => (this.user = user),
    });
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    if (!this.user) return;

    this.memberService.getMember(this.user.userName).subscribe({
      next: (member) => (this.member = member),
    });
  }

  updateMember() {
    this.memberService.uodateMember(this.editForm?.value).subscribe({
      next: (_) => {
        this.toaster.success('Profile updated successfully.');
        this.editForm?.reset(this.member);
      },
    });
  }
}
