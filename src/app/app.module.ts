import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
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
import { AdditionalCoversComponent } from './components/additional-covers/additional-covers.component';
import { LoginComponent } from './components/login/login.component';
import { VInfoComponent } from './components/v-info/v-info.component';
import {MatDividerModule} from '@angular/material/divider';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { CdkStepper } from '@angular/cdk/stepper';
import { InsuringPartyComponent } from './components/insuring-party/insuring-party.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { MTPLCalculatorComponent } from './components/mtpl-calculator/mtpl-calculator.component';
import { MTPLPolicyComponent } from './components/mtpl-policy/mtpl-policy.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PaymentComponent } from './components/payment/payment.component';
import { InstallmentComponent } from './components/installment/installment.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { VehicleOwnerComponent } from './components/vehicle-owner/vehicle-owner.component';
import { ContactComponent } from './components/contact/contact.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { SignUpComponent } from './components/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    TabComponent,
    AdditionalCoversComponent,
    PolicyDetailsComponent,
    LoginComponent,
    VInfoComponent,
    Tab2Component,
    TabsComponent,
    InsuringPartyComponent,
    DeliveryComponent,
    MTPLCalculatorComponent,
    MTPLPolicyComponent,
    PersonalComponent,
    PaymentComponent,
    InstallmentComponent,
    ProposalComponent,
    VehicleOwnerComponent,
    ContactComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatTabsModule,
    MatCheckboxModule,
    MatDividerModule,
    NgxGoogleAnalyticsModule.forRoot('UA-170099069-1'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [CdkStepper,MTPLCalculatorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
