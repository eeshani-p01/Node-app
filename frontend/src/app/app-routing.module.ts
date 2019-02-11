import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './messages';
import { HomeComponent } from './home';
import { RegisterComponent } from './register';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'messages/:name', component: MessagesComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
