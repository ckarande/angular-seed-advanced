// angular
import {TestBed} from '@angular/core/testing';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Route} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

// libs
import {StoreModule} from '@ngrx/store';

// app
import {t} from '../shared/test/index';
import {TEST_CORE_PROVIDERS, TEST_HTTP_PROVIDERS} from '../shared/core/testing/index';
import {NameListService, NavbarComponent, ToolbarComponent} from '../shared/sample/index';
import {MultilingualModule} from '../shared/i18n/multilingual.module';
import {reducer} from '../shared/i18n/index';

// module
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {DogComponent} from './dog/dog.component';
import {PersonComponent} from './person/person.component';
import {EventComponent} from './event/event.component';

const config: Route[] = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'dog', component: DogComponent},
  {path: 'person', component: PersonComponent},
  {path: 'event', component: EventComponent}
];

// test module configuration for each test
const testModuleConfig = () => {
  TestBed.configureTestingModule({
    imports: [
      FormsModule,
      MultilingualModule,
      StoreModule.provideStore({}),
      RouterTestingModule.withRoutes(config)
    ],
    declarations: [
      TestComponent, AppComponent,
      HomeComponent, AboutComponent, DogComponent,
      NavbarComponent, ToolbarComponent
    ],
    providers: [
      TEST_CORE_PROVIDERS(),
      TEST_HTTP_PROVIDERS(),
      NameListService
    ]
  });
};

export function main() {
  t.describe('@Component: AppComponent', () => {

    t.be(testModuleConfig);

    t.it('should build without a problem',
      t.async(() => {
        TestBed.compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            fixture.detectChanges();
            t.e(fixture.nativeElement).toBeTruthy();
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-app></sd-app>'
})
class TestComponent {
}
