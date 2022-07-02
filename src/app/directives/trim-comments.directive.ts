import { AfterViewInit, Directive, ElementRef, Input, ViewChild } from '@angular/core';

@Directive({
  selector: '[appTrimComments]'
})
export class TrimCommentsDirective{
  constructor(private elRef: ElementRef) { 
    console.log(this.elRef.nativeElement.value)
  }
}
