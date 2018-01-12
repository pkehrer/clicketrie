import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey, getKeySpacing } from '../board-layout';
import * as _ from 'lodash'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() layout: BoardLayout
  @Input() keyColors: { [id: number]: string }
  @Input() labelColors: { [id: number]: string }
  @Input() defaultKeyColor = 'gray'
  @Input() defaultLabelColor = 'white'
  @Input() boardColor = 'blue'
  @Input() unitpx: number = 75

  @Output() keyClick = new EventEmitter<BoardKey>()

  constructor() { }

  ngOnInit() {
    this.unitpx = _.toNumber(this.unitpx)
  }

  onKeyClick(key: BoardKey) {
    this.keyClick.next(key)
  }

  keyColor(key: BoardKey): string {
    return _.get(this.keyColors, key.id, this.defaultKeyColor)
  }

  labelColor(key: BoardKey): string {
    return _.get(this.labelColors, key.id, this.defaultLabelColor)
  }

  getRowOffset(row: BoardRow): number {
    if (row.yoffset) {
      return row.yoffset * this.unitpx
    }
    return 0
  }

  getKeyOffset(key: BoardKey): number {
    if (key.xoffset) {
      const offset = (this.unitpx + 2 * getKeySpacing(this.unitpx)) * key.xoffset + getKeySpacing(this.unitpx)
      return offset
    }
    return getKeySpacing(this.unitpx)
  }

  getDefaultOffset() {
    return getKeySpacing(this.unitpx)
  }
}
