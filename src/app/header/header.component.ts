import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {
    this.authService.user.subscribe(response => this.user = response);
    //din service, am luat valoarea initiala a lui "user" si am stocat-o in
    //variabila de aici
    //loggedin pentru ngIf
  }
  user: User;
  isLoggedIn = false;
  ngOnInit(): void {
    console.log(this.user)
    if (this.user) {
      this.isLoggedIn = true;
    } else {
      !this.isLoggedIn;
    }

  }
  onLogout() {
    this.authService.logout();
  }

}
