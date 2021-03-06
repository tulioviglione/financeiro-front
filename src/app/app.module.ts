import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth.guard';

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
      CommonModule,
      BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
