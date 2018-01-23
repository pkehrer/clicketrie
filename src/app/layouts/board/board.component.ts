import { Component, Input, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey, getKeySpacing } from '../board-layout';
import * as _ from 'lodash'

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  @Input() layout: BoardLayout
  @Input() keyColors: { [code: string]: string } = {}
  @Input() labelColors: { [code: string]: string } = {}
  @Input() defaultKeyColor = 'gray'
  @Input() defaultLabelColor = 'white'
  @Input() boardColor = 'black'
  @Input() unitpx: number = 75

  @Output() mouseClick = new EventEmitter<BoardKey>()
  @Output() keyClick = new EventEmitter<BoardKey>()

  constructor() { }

  @HostListener('window:keyup', ['$event']) onKeyUp(keyEvent: KeyboardEvent) {
    console.log('key code:', keyEvent.code)
    console.log('key on board:', _.get(this.layout.findKey(keyEvent.code), 'data.label'))
  }

  ngOnInit() {
    this.unitpx = _.toNumber(this.unitpx)
  }

  onMouseClick(key: BoardKey) {


    this.mouseClick.next(key)
  }

  keyColor(key: BoardKey): string {
    return _.get(this.keyColors, key.data.code, this.defaultKeyColor)
  }

  labelColor(key: BoardKey): string {
    return _.get(this.labelColors, key.data.code, this.defaultLabelColor)
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
