// angular
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';

// app
import {t} from '../../shared/test/index';
import {PersonComponent} from './person.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [PersonComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: PersonComponent', () => {

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
  template: '<sd-person></sd-person>'
})
class TestComponent {
}
