// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../shared/test/index';
import { EventCategoryComponent } from './eventCategory.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [EventCategoryComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: EventCategoryComponent', () => {

    t.be(testModuleConfig);

    t.it('should work',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            let aboutDOMEl = fixture.debugElement.children[0].nativeElement;

            t.e(aboutDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-eventCategory></sd-eventCategory>'
})
class TestComponent {}
