import { Component, OnInit } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey } from './board-layout';

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent implements OnInit {

  layout = new BoardLayout(
    [
      new BoardRow([
        new BoardKey(1, 1, 'a'),
        new BoardKey(2, 1, 'b'),
        new BoardKey(1, 1, 'c'),
        new BoardKey(1, 2, 'Enter'),
      ]),
      new BoardRow([
        new BoardKey(1, 1, 'd'),
        new BoardKey(1, 1, 'e'),
        new BoardKey(1, 1, 'q'),
        new BoardKey(1, 1, 'x'),
        new BoardKey(1, 1, 'f', 200),
      ])
    ]
  )

  constructor() { }

  ngOnInit() {
  }

}
