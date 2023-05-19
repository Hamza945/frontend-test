import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

// Angular Material Modules

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { MainContentCardComponent } from './components/main-content-card/main-content-card.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidemenuComponent,
    MainContentCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    MatSlideToggleModule,
     BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
