import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService, User } from '../services/authservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Obj: User;
  [x: string]: any;
  userDisplayName = '';
  password = '';
  constructor(private srvLogin: AuthService, private router: Router, public activatedRoute: ActivatedRoute, private cookieService: CookieService) {
    this.Obj = new User();
    this.userDisplayName = this.cookieService.get('username');
    this.password = this.cookieService.get('password');
    this.Obj.username = this.userDisplayName;
    this.Obj.password = this.password;
    if (!srvLogin.checkLogValues(this.Obj)) {
      router.navigate(['/login']);
    }
  }

  ngOnInit(): void { }
  
  logout(): void {
    this.router.navigate(['/login']);
    this.cookieService.deleteAll();
  }

}
