import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionRoutingModule } from './connexion-routin-module';
import { ConnexionComponent } from './connexion.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, InscriptionComponent, ConnexionComponent],
  imports: [
    CommonModule ,
    ConnexionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConnexionModule { }
