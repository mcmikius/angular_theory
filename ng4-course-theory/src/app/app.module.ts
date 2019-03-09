import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponent} from './my/my.component';
import { My2Component } from './my2/my2.component'

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    My2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
//    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
