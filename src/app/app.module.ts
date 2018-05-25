import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/**
 *  Unused import visible by adding in tsconfig.json
"compilerOptions": {
  "noUnusedLocals": true,
  "noUnusedParameters": true
}

Add new rule in tslint.json
"no-unused-variable": true
*/
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
