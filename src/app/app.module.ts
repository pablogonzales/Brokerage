import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
import { routing, appRoutingProviders }  from './app.routing';

import { AppComponent } from './app.component';
import { Dashboard } from './dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    Dashboard
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
