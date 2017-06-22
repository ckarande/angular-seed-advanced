// angular
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// app
import { t } from '../../shared/test/index';
import { OrganizationComponent } from './organization.component';

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    declarations: [OrganizationComponent, TestComponent]
  });
};

export function main() {
  t.describe('@Component: OrganizationComponent', () => {

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
  template: '<sd-organization></sd-organization>'
})
class TestComponent {}
