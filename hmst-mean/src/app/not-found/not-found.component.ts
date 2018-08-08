import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  constructor(private router: Router) {
    const r = this.router;

    // Redirect to the home page after displaying for 3 seconds.
    setTimeout(() => {
      r.navigateByUrl('/');
    }, 3000);

  }

  ngOnInit() {

  }

}
