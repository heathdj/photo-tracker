import { AccountService } from './../_services/account.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toaster: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (_) => this.router.navigateByUrl('/members'),
      error: (error) =>
        this.toaster.error(
          'Username or Password is incorrect. Please check and try again.'
        ),
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
