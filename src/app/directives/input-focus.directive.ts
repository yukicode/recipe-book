import { Directive, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocus]'
})
export class InputFocusDirective {

  constructor(
    public renderer: Renderer,
    public elementRef: ElementRef
  ) {}

  ngOnInit(){
    this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus', []);
  }
}
