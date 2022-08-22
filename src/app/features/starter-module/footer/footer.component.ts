import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthService) {
    this.authService.user.subscribe(response => this.user = response);

  }
  user: User;
  isLoggedIn = false;

  ngOnInit(): void {
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
