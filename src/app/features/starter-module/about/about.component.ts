import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
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
