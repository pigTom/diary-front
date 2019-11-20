import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {HeroSearchComponent} from './pages/hero-search/hero-search.component';
import {MessagesComponent} from './messages/messages.component';
import {CrisisListComponent} from './pages/crisis-list/crisis-list.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from './pages/heroes/heroes.module';
import {DemoMenuComponent} from './pages/demo-menu/demo-menu.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MainNavComponent} from './pages/main-nav/main-nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {PRadioComponent} from './p-radio/p-radio.component';
import {MyRadioComponent} from './my-radio/my-radio.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  imports: [ // for module
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [ // for component
    AppComponent,
    LoginComponent,
    MainNavComponent,
    PageNotFoundComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
