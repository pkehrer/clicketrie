import { Component, OnInit } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey, BoardKeySet, KeySpacing } from './board-layout';
import { TklLayout } from './layouts/tkl';
import * as _ from 'lodash'

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent {

  layout = TklLayout

  defaultColor = '#4b4646'
  colors = {
    '#db4b4b': ['esc', '`', 'tab', 'caps', 'shift', 'ctrl', 'fn', 'menu', 'alt', 'Enter', '\\', 'bksp', 'f12', 'win'],
    'teal': ['up', 'dn', 'lft', 'rgt']
  }

  defaultLabelColor = 'white'
  labelColors = {
    'black': ['esc', '`', 'tab', 'caps', 'shift', 'ctrl', 'fn', 'menu', 'alt', 'Enter', '\\', 'bksp', 'f12', 'win'],
    'teal': ['up', 'dn', 'lft', 'rgt']
  }

  colorsByKey: { [keyLabel: string]: string }
  labelColorsByKey: { [keyLabel: string]: string }

  constructor() {
    this.colorsByKey = {}
    _.each(this.colors, (labels, color) => {
      _.each(labels, label => this.colorsByKey[label] = color)
    })

    this.labelColorsByKey = {}
    _.each(this.labelColors, (labels, color) => {
      _.each(labels, label => this.labelColorsByKey[label] = color)
    })
  }

  getColor(key: BoardKey) {
    return this.colorsByKey[key.label] || this.defaultColor
  }

  getLabelColor(key: BoardKey) {
    return this.labelColorsByKey[key.label] || this.defaultLabelColor
  }

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
