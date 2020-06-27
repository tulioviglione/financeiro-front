import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      ErrorsModule,
      CoreModule,
      AppRoutingModule,
      HttpClientModule,
      CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
