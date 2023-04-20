import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { ForgotComponent } from './user/pages/forgot/forgot.component';
import { LoginComponent } from './user/pages/login/login.component';
import { RegistrationComponent } from './user/pages/registration/registration.component';
import { UnlockComponent } from './user/pages/unlock/unlock.component';

const routes: Routes = [
  {path:'' ,component:HeaderComponent},
  {path:'login',component:LoginComponent},
  {path: 'registration' ,component:RegistrationComponent},

  {path:'unlockAcc',component:UnlockComponent},
  
  {path:'forgot',component:ForgotComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
