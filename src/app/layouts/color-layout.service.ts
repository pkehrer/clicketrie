import { Injectable } from '@angular/core';
import { ColorLayout } from './color-layout';
import * as _ from 'lodash'

@Injectable()
export class ColorLayoutService {

  constructor() { }

  public getColorLayouts(): ColorLayout[] {
    let str = localStorage.getItem('color_layouts')
    if (!str) {
      return []
    }
    return JSON.parse(str)
  }

  public saveLayout(l: ColorLayout): void {
    let layouts = this.getColorLayouts()
    _.remove(layouts, lay => lay.name === l.name)
    layouts.push(l)
    localStorage.setItem('color_layouts', JSON.stringify(_.sortBy(layouts, 'name')))
  }

}
