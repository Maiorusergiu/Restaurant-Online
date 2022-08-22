import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  loggedIn = false;
  constructor(private authService: AuthService) {
    this.authService.user.subscribe(response => this.user = response);
  }

  ngOnInit(): void {
    if (this.user !== null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
