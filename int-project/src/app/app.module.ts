import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{ AngularFireModule} from '@angular/fire/compat'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LocationComponent } from './location/location.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { Login1Component } from './login1/login1.component';

import { ButtonComponent } from './button/button.component';
import { DogsComponent } from './dogs/dogs.component';
import { CatsComponent } from './cats/cats.component';
import { BirdsComponent } from './birds/birds.component';
import { FishesComponent } from './fishes/fishes.component';
import { OtherComponent } from './other/other.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './login1/sign/sign.component';
import { environment } from 'src/environments/environment';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ProfileComponent } from './profile/profile.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LocationComponent,
    SearchComponent,
    HomeComponent,
    MainComponent,
    FooterComponent,
    LoginComponent,
    Login1Component,
   
    ButtonComponent,
    DogsComponent,
    CatsComponent,
    BirdsComponent,
    FishesComponent,
    OtherComponent,
    RegisterComponent,
    SignComponent,
    ForgotPassComponent,
    VerifyEmailComponent,
    ProfileComponent,
    DropDownComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
