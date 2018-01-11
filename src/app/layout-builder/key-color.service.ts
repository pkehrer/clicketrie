import { Injectable } from '@angular/core';
import { BoardKey } from './board-layout';
import * as _ from 'lodash'

@Injectable()
export class KeyColorService {

  selectedKeyColor: string
  defaultColor = '#4b4646'
  defaultLabelColor = 'white'
  colorsByKey: { [keyId: number]: string } = {}

  gettingKeyColor = false

  constructor() { }

  public selectKey(key: BoardKey) {
    if (this.gettingKeyColor) {
      this.selectedKeyColor = _.get(this.colorsByKey, key.id)
      this.gettingKeyColor = false
      return
    }
    this.colorsByKey[key.id] = this.selectedKeyColor || this.defaultColor
  }

  public getKeyColor(key: BoardKey) {
    return this.colorsByKey[key.id] || this.defaultColor
  }

  public getLabelColor(key: BoardKey) {
    return this.defaultLabelColor
  }

  public startGetKeyColor() {
    this.gettingKeyColor = true
  }

  public saveColors() {
    localStorage.setItem('colors', JSON.stringify({ keys: this.colorsByKey }))
  }

  public loadColors() {
    const saved = localStorage.getItem('colors')
    if (!saved) {
      return
    }
    this.colorsByKey = JSON.parse(saved)['keys']
  }

}
