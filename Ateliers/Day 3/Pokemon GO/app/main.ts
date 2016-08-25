import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes'
import { disableDeprecatedForms, provideForms } from '@angular/forms';


bootstrap(AppComponent, [AppRoutes, disableDeprecatedForms(), provideForms()])
    .catch((error: any) => console.log(error));