import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCardModule} from '@angular/material/card';
import { MatSelectModule} from '@angular/material/select';
import { constants } from 'buffer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { LoginComponent } from './components/login/login.component';
import { VInfoComponent } from './components/v-info/v-info.component';

import {MatDividerModule} from '@angular/material/divider';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    TabComponent,
    PolicyDetailsComponent,
    LoginComponent,
    VInfoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
