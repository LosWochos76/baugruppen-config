import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BgSelectComponent } from './bg-select/bg-select.component';
import { BgConfigComponent } from './bg-config/bg-config.component';
import { BgValueComponent } from './bg-value/bg-value.component';
import { BgEditComponent } from './bg-edit/bg-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { BgSummaryComponent } from './bg-summary/bg-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    BgSelectComponent,
    BgConfigComponent,
    BgValueComponent,
    BgEditComponent,
    BgSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
