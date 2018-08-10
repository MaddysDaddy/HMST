import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { User } from './../user';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  userName = this.cookieService.get('userName') || 'Joe Blow';

  isSuperUser: boolean;

  constructor(private cookieService: CookieService, private authService: AuthService, private router: Router) { }



  logout() {
    this.authService.logout()
      .then(user => {
        console.log('logging out: ', user);
        this.router.navigate(['/']);
      });
  }


  ngOnInit() {
    // console.log(this.cookieService.get('userID'));

  }

}
