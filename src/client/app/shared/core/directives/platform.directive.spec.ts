// angular
import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';

// libs
import { Registry, Model } from 'ngrx-registry';

// app
import { t } from '../../test/index';

// module

const PlatformDirective = Registry.directives.core.PlatformDirective;
const WindowService = Registry.services.core.WindowService;
import { WindowMock } from '../../core/testing/index';

const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [PlatformDirective, TestComponent]
  });
};

@Component({
  viewProviders: [
    { provide: WindowService, useClass: WindowMock }
  ],
  selector: 'test-cmp',
  template: `<div platform></div>`
})
class TestComponent { }

export function main() {
  t.describe('core: PlatformDirective', () => {

    t.be(testModuleConfig);

    t.it('should add platform class',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let compDOMEl = fixture.debugElement.children[0].nativeElement;
            t.e(compDOMEl.getAttribute('class')).toBe('web');
          });
      }));
  });
}
