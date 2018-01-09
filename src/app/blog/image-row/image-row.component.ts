import { Component, OnInit, Input, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import * as _ from 'lodash'
@Component({
  selector: 'image-row',
  templateUrl: './image-row.component.html',
  styleUrls: ['./image-row.component.css']
})
export class ImageRowComponent implements AfterViewInit {

  @Input()
  images: string[]

  @Input()
  heightPx: number = 100

  constructor() { }

  ngAfterViewInit() {

  }

}
