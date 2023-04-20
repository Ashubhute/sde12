import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { UnlockComponent } from './pages/unlock/unlock.component';
import { ForgotComponent } from './pages/forgot/forgot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [LoginComponent,RegistrationComponent,UnlockComponent,ForgotComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
   exports:[
    LoginComponent,
     RegistrationComponent,
    UnlockComponent,
    ForgotComponent
   ]
})
export class UserModule { }
