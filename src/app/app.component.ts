import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private Thing: string[][];
  constructor() {
    this.Thing = [];

  }

  ngOnInit() {
    for (let i = 0; i < 16; i++) {
      this.Thing[i] = [];
      for (let j = 0; j < 16; j++) {
        this.Thing[i][j] = 'card';
      }

    }
    //this.Thing[1][1] = 'card1';
    this.Thing[1][3] = 'startnode';
    this.Thing[5][8] = 'endnode';
  }
  row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  returncolor(i, j) {
    this.Thing[i][j] = 'card1';
  }
}

