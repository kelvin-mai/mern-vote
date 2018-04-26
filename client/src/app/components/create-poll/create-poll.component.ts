import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  poll: any = {
    question: 'Which is better?',
    options: ['React', 'Angular']
  };

  constructor() {}

  ngOnInit() {}

  addInput() {
    this.poll.options.push('Added');
  }

  handleSubmit() {
    this.poll.options.forEach(option => console.log(option));
  }

  handleTrackBy(index: number, obj: any): any {
    return index;
  }
}
