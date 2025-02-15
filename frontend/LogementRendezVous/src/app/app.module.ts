import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogementComponent } from './logement/logement.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { NavbarComponent } from './navbar/navbar.component';
import{ReactiveFormsModule }  from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { AddlogementComponent } from './addlogement/addlogement.component';

@NgModule({
  declarations: [
    AppComponent,
    LogementComponent,
    RendezVousComponent,
    NavbarComponent,
    AddlogementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
