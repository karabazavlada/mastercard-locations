import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    VideoFormComponent,
    BottomMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
