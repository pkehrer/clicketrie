import { Component, OnInit, HostListener } from '@angular/core';
import { Tkl } from '../layouts/boards/tkl';
import { BoardKey } from '../board-layout';
import * as _ from 'lodash'
@Component({
  selector: 'key-tester',
  templateUrl: './key-tester.component.html',
  styleUrls: ['./key-tester.component.css']
})
export class KeyTesterComponent implements OnInit {

  layout = Tkl
  keyPresses: string[] = []

  constructor() {

  }


  ngOnInit() {
  }

  keyPressesString(): string {
    return _.join(this.keyPresses, ' ')
  }

  onMouseClick(key: BoardKey) {
    this.keyPresses.push(key.data.label)
  }

  onKeyClick(key: BoardKey) {
    this.keyPresses.push(key.data.label)
  }

}
