import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import * as _ from 'lodash'

@Component({
  selector: 'image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.scss']
})
export class ImageRowComponent implements AfterViewInit {

  _data: { image: string, caption: string, link?: string }[]

  @Input()
  public set data(data: { image: string, caption: string, link?: string }[]) {
    this._data = _.map(data, d => ({
      caption: d.caption,
      link: d.link,
      image: _.startsWith(d.image, 'http') ? d.image : 'assets/img/' + d.image
    }))
  }

  @Input()
  heightPx: number = 250

  constructor() { }

  ngAfterViewInit() {

  }

}
