import { Component, OnInit } from '@angular/core';
import { BoardLayout, BoardRow, BoardKey, BoardKeySet } from './board-layout';
import * as BoardLayouts from './layouts/boards/all';
import * as ColorLayouts from './layouts/colors/all'
import * as _ from 'lodash'
import { ColorLayout } from './color-layout';
import { ColorLayoutService } from './color-layout.service';

@Component({
  selector: 'layout-builder',
  templateUrl: './layout-builder.component.html',
  styleUrls: ['./layout-builder.component.css']
})
export class LayoutBuilderComponent {

  paulLayout = BoardLayouts.Tkl
  paulColors = ColorLayouts.Paul
  kristenLayout = BoardLayouts.Tkl
  kristenColors = ColorLayouts.Kristen

  layout = BoardLayouts.Tkl

  keyColor: string

  boardSize: number = 49

  colorLayout: ColorLayout = {
    name: '',
    keys: {},
    labels: {}
  }

  colorLayouts: ColorLayout[]

  eyeDropperClicked = false

  constructor(private colorSvc: ColorLayoutService) {
    this.colorLayouts = this.colorSvc.getColorLayouts()

    const firstLayout = _.first(this.colorLayouts)
    if (firstLayout) {
      this.colorLayout = firstLayout
    }

  }

  onKeyClick(key: BoardKey) {
    if (this.eyeDropperClicked) {
      console.log(key.id)
      this.eyeDropperClicked = false;
      this.keyColor = this.colorLayout.keys[key.id]
      return
    }
    this.colorLayout.keys[key.id] = this.keyColor
  }

  saveLayout() {
    this.colorSvc.saveLayout(this.colorLayout)
    this.colorLayouts = this.colorSvc.getColorLayouts()
  }

  setLayout(layout: ColorLayout) {
    console.log(layout)
    this.colorLayout = layout
  }



}
