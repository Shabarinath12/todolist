import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './pages/welcomepage/welcomepage.component';
import { NameComponent } from './components/name/name.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import { FeaturepageComponent } from './pages/featurepage/featurepage.component';
import { FormcontrolpageComponent } from './pages/formcontrolpage/formcontrolpage.component';
import { DocspageComponent } from './pages/docspage/docspage.component';
import { BannerComponent } from './components/banner/banner.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NameComponent,
    FeaturepageComponent,
    FormcontrolpageComponent,
    DocspageComponent,
    BannerComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
