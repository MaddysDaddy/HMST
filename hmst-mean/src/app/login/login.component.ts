import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { AuthService } from './../services/auth.service';
import { User } from './../user';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registerUser: User = new User();
  registrationErrors: string[] = [];
  loginUser: User = new User();

  constructor(private authService: AuthService, private router: Router, private cookieService: CookieService) { }

  // register(e: Event, user: User) {
  //   e.preventDefault();

  //   this.authService.register(this.registerUser)
  //     .then(data => {
  //       console.log(data);

  //       this.router.navigate(['/admin/portal']);
  //     });
  // }

  register(e: Event, user: User) {
    e.preventDefault();

    this.authService.register(this.registerUser)
      .subscribe(data => {
        if (data._id) {
          console.log('success!', data);
          this.router.navigate(['/admin/portal']);
        } else {

          for (let i = 0; i < data.length; i++) {
            if (data[i].indexOf('email') > 0) {
              this.registrationErrors.push('Email is invalid');
            }
            if (data[i].indexOf('acode') > 0) {
              this.registrationErrors.push('Activation code is invalid');
            }

          }
        }
      });
  }

  login(e: Event, form: NgForm) {
    e.preventDefault();

    console.log('logging in...');

    this.loginUser = form.value;

    this.authService.login(this.loginUser)
      .then(data => {
        console.log('login comp: ', data);

        this.router.navigate(['/admin/portal']);
      });
  }

  ngOnInit() {

  }

}
