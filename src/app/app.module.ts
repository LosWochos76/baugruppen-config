import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgSelectComponent } from './bg-select/bg-select.component';
import { BgConfigComponent } from './bg-config/bg-config.component';
import { BgValueComponent } from './bg-value/bg-value.component';

@NgModule({
  declarations: [
    AppComponent,
    BgSelectComponent,
    BgConfigComponent,
    BgValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
