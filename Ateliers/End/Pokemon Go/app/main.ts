import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import { AppRouterProvider } from './app.routes';
import { disableDeprecatedForms, provideForms } from '@angular/forms';


bootstrap(AppComponent,
    [
        AppRouterProvider,
        disableDeprecatedForms(),
        provideForms()
    ]
).catch((err:any) => console.log(err));
