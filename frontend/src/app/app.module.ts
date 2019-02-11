import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule, AuthService } from './shared';

import { AppComponent } from './app.component';
import { MessagesComponent, NewMessagesComponent } from './messages';
import { MessagesService } from './messages';
import { NavBarComponent } from './nav-bar';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    NewMessagesComponent,
    NavBarComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    MessagesService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
