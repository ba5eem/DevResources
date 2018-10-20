import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  componentUsers = [];
  user: object;

  private _isLoggedIn = false;
  private _isLoggedInAsObservable;

  constructor(
    private router: Router,
    private auth: AuthService,
    private users: UsersService,
    private session: SessionService
  ) {
    this.componentUsers = users.users;
    this.user = this.session.getSession();
  }

  ngOnInit() {
    this._isLoggedInAsObservable = this.session.isLoggedInAsAObservable();
    this._isLoggedInAsObservable.subscribe(
      (loggedIn: boolean) => {
        this._isLoggedIn = loggedIn;
        console.log('onInit', loggedIn);
      },
      (error) => { console.log(error); }
    );
  }

  isLoggedIn() {
    return this.session.isLoggedIn();
  }

  isLoggedInAsObservable() {
    return this._isLoggedIn;
  }

  login() {
    return this.router.navigate(['/login']);
  }

  logout() {
    return this.auth.logout();
  }

  ngOnDestroy() {
    this._isLoggedInAsObservable.unsubscribe();
  }
}
