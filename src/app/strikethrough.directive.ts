import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
 
    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textDeco("blink")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("red underline overline wavy")
  }

  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}