import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BirdsComponent } from './birds/birds.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { FishesComponent } from './fishes/fishes.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

import { HomeComponent } from './home/home.component';
import { Login1Component } from './login1/login1.component';
import { SignComponent } from './login1/sign/sign.component';
import { OtherComponent } from './other/other.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
{path:"login1",component:Login1Component},
{path:"dogs",component:DogsComponent},
{path:"cats",component:CatsComponent},
{path:"birds",component:BirdsComponent},
{path:"fishes",component:FishesComponent},
{path:"other",component:OtherComponent},
{path:"register",component:RegisterComponent},
{path:"verify-email",component:VerifyEmailComponent},
{path:"forgot-pass",component:ForgotPassComponent},
{path:"profile",component:ProfileComponent},
{path:"drop-down",component:DropDownComponent},
{path:"about",component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
