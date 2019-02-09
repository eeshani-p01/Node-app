import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './shared';

import { AppComponent } from './app.component';
import { MessagesComponent, NewMessagesComponent } from './messages';
import { MessagesService } from './messages';
import { NavBarComponent } from './nav-bar';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessagesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule
  ],
  providers: [
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
