
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from 'app/auth/auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from 'app/auth/signup/signup.component';

@NgModule({
  declarations: [
    SigninComponent,
    SignupComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
