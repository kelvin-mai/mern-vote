import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {}

  logout() {
    console.log(this.api.token);
    if (this.api.token) {
      this.api.token = '';
    }
    console.log(this.api.token);
    this.router.navigate(['/']);
  }
}
