import { CdkStepper } from '@angular/cdk/stepper';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { routes } from 'src/app/app-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdditionalCoversComponent } from './components/additional-covers/additional-covers.component';
import { ContactComponent } from './components/contact/contact.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { InstallmentComponent } from './components/installment/installment.component';
import { OrdinalPipe } from './components/installment/ordinal.pipe';
import { InsuringPartyComponent } from './components/insuring-party/insuring-party.component';
import { LoginComponent } from './components/login/login.component';
import { MTPLCalculatorComponent } from './components/mtpl-calculator/mtpl-calculator.component';
import { MTPLPolicyComponent } from './components/mtpl-policy/mtpl-policy.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PersonalComponent } from './components/personal/personal.component';
import { PolicyDetailsComponent } from './components/policy-details/policy-details.component';
import { ProposalComponent } from './components/proposal/proposal.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { VInfoComponent } from './components/v-info/v-info.component';
import { VehicleOwnerComponent } from './components/vehicle-owner/vehicle-owner.component';
import { LoggedInGuardGuard } from './logged-in-guard.guard';
import { LoggedInServiceService } from './logged-in-service.service';
import { StepperComponent } from './stepper/stepper.component';
import { TabComponent } from './tab/tab.component';

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
    SignUpComponent,
    OrdinalPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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
    NgxGoogleAnalyticsRouterModule,
    HttpClientModule
  ],
  providers: [
    CdkStepper,
    MTPLCalculatorComponent,
    LoggedInGuardGuard,
    LoggedInServiceService,
    ProposalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
