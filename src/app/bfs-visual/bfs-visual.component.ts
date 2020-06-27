import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bfs-visual',
  templateUrl: './bfs-visual.component.html',
  styleUrls: ['./bfs-visual.component.css']
})
export class BfsVisualComponent implements OnInit {

  private Thing: string[][];
  private visited: boolean[][];
  private level: number[][];
  private block: boolean[][];
  private rreset: boolean[][];

  constructor() {
    this.Thing = [];
    this.visited = [];
    this.level = [];
    this.block = [];
    this.rreset = [];
  }

  ngOnInit() {
    for (let i = 0; i < 16; i++) {
      this.Thing[i] = [];
      this.visited[i] = [];
      this.level[i] = [];
      this.block[i] = [];
      this.rreset[i] = [];
      for (let j = 0; j < 16; j++) {
        this.Thing[i][j] = 'card';
        this.visited[i][j] = false;
        this.level[i][j] = 0;
        this.block[i][j] = false;
        this.rreset[i][j] = false;
      }

    }
    this.Thing[1][3] = 'startnode';
    this.Thing[5][8] = 'endnode';
  }

    row = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    returncolor(i, j) {
      this.block[i][j] = true;
      this.Thing[i][j] = 'card1';
    }

  reset() {
    this.ngOnInit();
  }

    start = async () => {
      console.log('hello');
      let Q = [];
      Q.push([1, 3]);
      this.visited[1][3] = true;
      this.level[1][3] = 0;
      this.Thing[1][3] = 'cng';
      while (Q.length > 0) {
        let x = Q[0];
        Q.shift();
        let i = x[0], j = x[1];
        // this.Thing[i][j] = 'queue_card';
        i = x[0] + 1;
        j = x[1];
        if (i >= 0 && i < 16 && j >= 0 && j < 16 && this.visited[i][j] == false && this.block[i][j] == false ) {
          this.visited[i][j] = true;
          this.level[i][j] = this.level[x[0]][x[1]] + 1;
          if (i == 5 && j == 8) break;
          this.Thing[i][j] = 'cng';
          Q.push([i, j]);
          await new Promise(resolve => setTimeout(resolve, 50));

        }
        i = x[0] - 1;
        j = x[1];
        if (i >= 0 && i < 16 && j >= 0 && j < 16 && this.visited[i][j] == false && this.block[i][j] == false) {
          this.visited[i][j] = true;
          this.level[i][j] = this.level[x[0]][x[1]] + 1;
          if (i == 5 && j == 8) break;
          this.Thing[i][j] = 'cng';
          Q.push([i, j]);
          await new Promise(resolve => setTimeout(resolve, 50));
        }

        i = x[0];
        j = x[1] + 1;
        if (i >= 0 && i < 16 && j >= 0 && j < 16 && this.visited[i][j] == false && this.block[i][j] == false) {
          this.visited[i][j] = true;
          this.level[i][j] = this.level[x[0]][x[1]] + 1;
          if (i == 5 && j == 8) break;
          this.Thing[i][j] = 'cng';
          Q.push([i, j]);
          await new Promise(resolve => setTimeout(resolve, 50));

        }

        i = x[0];
        j = x[1] - 1;
        if (i >= 0 && i < 16 && j >= 0 && j < 16 && this.visited[i][j] == false && this.block[i][j] == false) {
          this.visited[i][j] = true;
          this.level[i][j] = this.level[x[0]][x[1]] + 1;
          if (i == 5 && j == 8) break;
          this.Thing[i][j] = 'cng';
          Q.push([i, j]);
          await new Promise(resolve => setTimeout(resolve, 50));

        }
        this.Thing[x[0]][x[1]] = 'cng';
      }
      this.Thing[1][3] = 'startnode';
    }
  }







