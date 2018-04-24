import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  polls: any[];

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.api.allPolls().subscribe(polls => {
      this.polls = polls;
      console.log(this.polls);
    });
  }
}
