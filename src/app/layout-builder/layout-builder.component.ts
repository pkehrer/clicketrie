import { Component, OnInit } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey, BoardKeySet, KeySpacing } from './board-layout';
import { TklLayout } from './layouts/tkl';
import * as _ from 'lodash'
import { KeyColorService } from './key-color.service';

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent {

  layout = TklLayout

  constructor(public keyColorSvc: KeyColorService) { }

  getRowOffset(row: BoardRow): number {
    if (row.yoffset) {
      return row.yoffset * this.layout.unitpx
    }
    return 0
  }

  getKeyOffset(key: BoardKey): number {
    if (key.xoffset) {
      return (this.layout.unitpx + 2 * KeySpacing) * key.xoffset + KeySpacing
    }
    return KeySpacing
  }
}
