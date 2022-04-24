import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, User } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  Obj: User;
  constructor(private srvLogin: AuthService, private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.Obj = new User();
  }
  ngOnInit(): void { }

  onsubmit(): void {
    this.cookieService.set('username', this.Obj.username);
    this.cookieService.set('password', this.Obj.password);

    const a = this.Obj;
    if (this.srvLogin.checkLogValues(this.Obj)) {
      this.srvLogin.isloggedin = true;
      console.log(this.srvLogin.isloggedin);
      this.router.navigate(['/dashboard']);
    }
  }


}
