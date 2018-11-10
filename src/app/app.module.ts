import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SearchComponent} from './search/search.component';
import {HomeComponent} from './home/home.component';
import { VideoFormComponent } from './video-form/video-form.component';
import { BottomMenuComponent } from './bottom-menu/bottom-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
//import { InMemoryDataService } from './in-memory-data.service';


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
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
   // HttpClientInMemoryWebApiModule.forRoot(
   //   InMemoryDataService, { dataEncapsulation: false }
   // )
    //
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
