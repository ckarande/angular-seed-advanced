// libs
import { Component, Inject, forwardRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Registry, Model } from 'ngrx-registry';

// app
const Config = Registry.classes.core.Config;
type ILang = Model.core.ILang;
const LogService = Registry.services.core.LogService;
type IAppState = Model.IAppState;
const MultilingualActions = Registry.actions.i18n;
const MultilingualService = Registry.services.i18n.MultilingualService;
const ElectronEventService = Registry.classes.electron.ElectronEventService;

@Component({
  moduleId: module.id,
  selector: 'lang-switcher',
  templateUrl: 'lang-switcher.component.html',
  styleUrls: ['lang-switcher.component.css'],
})
export class LangSwitcherComponent {

  public lang: string;
  public supportedLanguages: Array<ILang> = MultilingualService.SUPPORTED_LANGUAGES;

  constructor(
      @Inject(forwardRef(() => LogService)) private log: Model.core.ILogService, 
      private store: Store<IAppState>) {

    store.take(1).subscribe((s: any) => {
      // s && s.18n - ensures testing works in all cases (since some tests dont use i18n state)
      this.lang = s && s.i18n ? s.i18n.lang : '';
    });

    if (Config.IS_DESKTOP()) {
      // allow electron menu to talk to component
      ElectronEventService.on('changeLang').subscribe((e: any) => {
        this.changeLang({ target: { value: e.detail.value } });
      });
    }
  }

  changeLang(e: any) {
    let lang = this.supportedLanguages[0].code; // fallback to default 'en'

    if (Config.IS_MOBILE_NATIVE()) {
      if (e) {
        lang = this.supportedLanguages[e.newIndex].code;
      }
    } else if (e && e.target) {
      lang = e.target.value;
    }
    this.log.debug(`Language change: ${lang}`);
    this.store.dispatch(new MultilingualActions.ChangeAction(lang));
  }
}

declare module 'ngrx-registry' {
  export namespace Model {
    export namespace i18n {
      export interface IComponentRegistry {
        LangSwitcherComponent: typeof LangSwitcherComponent;
      }
    }
  }
}

Registry.components.i18n.LangSwitcherComponent = LangSwitcherComponent;
