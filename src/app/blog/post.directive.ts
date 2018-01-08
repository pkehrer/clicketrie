import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[post]'
})
export class PostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
