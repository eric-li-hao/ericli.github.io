import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './home/intro/intro.component';
import { NavComponent } from './nav/nav.component';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {MegaMenuModule} from 'primeng/megamenu';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IntroComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TabMenuModule,
    MegaMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
