import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const banner = $('#banner')
    console.log(banner.width())
  }
  @ViewChild('banner') bannerDiv: ElementRef
}
