import { Directive, HostListener, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImgFallback]',
})
export class ImgFallback {
  @Input() fallback: string = '/image-not-found.png';

  constructor(private el: ElementRef) {}

  @HostListener('error')
  onError() {
    const element = this.el.nativeElement;
    element.src = this.fallback;
  }
}
