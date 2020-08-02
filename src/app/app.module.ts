import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {Routes,RouterModule}  from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { EProtectPageComponent } from './components/e-protect-page/e-protect-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChoosePolicyComponent } from './components/choose-policy/choose-policy.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';



const myroute:Routes=[
  {path:'homePage',component:HomePageComponent},
  {path:'EProtect',component:EProtectPageComponent},
  {path:'choosePolicy',component:ChoosePolicyComponent},
  { path: '**', redirectTo: '/homePage', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    EProtectPageComponent,
    HomePageComponent,
    ChoosePolicyComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forRoot(myroute),
    MatFormFieldModule,
    MatStepperModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
