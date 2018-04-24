import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: string = '';
  password: string = '';
  isLogin: boolean = true;

  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLogin = this.route.snapshot.routeConfig.path == 'login';
  }

  async handleSubmit() {
    const { username, password } = this;
    const authType = this.isLogin ? 'login' : 'register';

    try {
      const data: any = await this.api
        .auth(authType, { username, password })
        .toPromise();

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
}
