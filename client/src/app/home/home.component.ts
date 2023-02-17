import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = this.getUsers;
  }

  registerToggle() {
    this.registerMode = !this.registerMode;
  }

  cancelRegisterMode(event: boolean) {
    this.registerMode = event;
  }

  getUsers() {
    this.http.get('http://localhost:5097/api/users').subscribe({
      next: (response: any) => (this.users = response),
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Request Completed');
      },
    });
  }
}
