// angular
import { Directive, ElementRef, Renderer, Inject, forwardRef } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

// module

@Directive({
  selector: '[platform]'
})
export class PlatformDirective {

  constructor(
    private el: ElementRef, 
    private renderer: Renderer, 
    @Inject(forwardRef(() => Registry.services.core.WindowService)) private win: Model.core.IWindow
  ) {
    let platformClass = 'web';
    let agent = win.navigator.userAgent.toLowerCase();
    if (agent.indexOf('electron') > -1) {
      platformClass = 'desktop';
    } else if (agent.indexOf('nativescript') > -1) {
      platformClass = 'nativescript';
    } 
    renderer.setElementClass(el.nativeElement, platformClass, true);
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace core {
      export interface IDirectiveRegistry {
        PlatformDirective: typeof PlatformDirective;
      }
    }
  }
}

Registry.directives.core.PlatformDirective = PlatformDirective;
Registry.directives.core.CORE_DIRECTIVES.push(PlatformDirective);
