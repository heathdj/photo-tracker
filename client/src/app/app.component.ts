import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MyTrackt - Photo Tracker';
  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
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
