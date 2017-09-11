import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from "../app.routing"

import { AppComponent } from './app.component';
import { LoginComponent } from "./components/login.components";
import { RegisterComponent } from "./components/register.components";

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      RegisterComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
      appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
