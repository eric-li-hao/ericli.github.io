import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { IntroComponent } from './body/intro/intro.component';
import { NavComponent } from './nav/nav.component';
import {MenuModule} from 'primeng/menu';
import {TabMenuModule} from 'primeng/tabmenu';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RippleModule} from 'primeng/ripple';
import {BodyComponent} from './body/body.component';
import { WelcomeComponent } from './body/welcome/welcome.component';
import { SkillsComponent } from './body/skills/skills.component';
import {FieldsetModule} from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    IntroComponent,
    NavComponent,
    BodyComponent,
    WelcomeComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    TabMenuModule,
    TieredMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    RippleModule,
    FieldsetModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
