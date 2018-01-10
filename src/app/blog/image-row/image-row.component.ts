import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import * as _ from 'lodash'
@Component({
  selector: 'image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.scss']
})
export class ImageRowComponent implements AfterViewInit {

  @Input()
  data: { image: string, caption: string, link?: string }[]

  @Input()
  heightPx: number = 250

  constructor() { }

  ngAfterViewInit() {

  }

}
