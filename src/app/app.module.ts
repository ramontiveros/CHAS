import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';

import { MainModule } from './main/main.module';


import { FirebaseModule, FirebaseAuthService } from 'ng2-firebase/core';
import { AuthService } from './auth.service';
import { AuthGuard } from "./auth-guard.service";
import { LoginGuard } from "./login-guard.service";




export const firebaseConfig = {
    apiKey: "AIzaSyBdgdpyGBHWA4_3Uq9Ig52gpyo9SagSAf0",
    authDomain: "chas-itesm.firebaseapp.com",
    databaseURL: "https://chas-itesm.firebaseio.com",
    storageBucket: "chas-itesm.appspot.com",
    messagingSenderId: "841229532620"
};


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
	  FirebaseModule.forRoot(firebaseConfig),
    AppRoutingModule,
    AuthModule,
    MainModule,
    MaterializeModule,
  ],
  providers: [
     FirebaseAuthService,
     AuthService,
     AuthGuard,
     LoginGuard,
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
