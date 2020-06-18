import { BrowserModule } from "@angular/platform-browser";
import { PersonalComponent } from '../app/components/personal/personal.component';
import { HttpClientModule } from "@angular/common/http";
import { moduleMetadata } from "@storybook/angular";
import { AppRoutingModule } from "../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { APP_BASE_HREF } from "@angular/common";
import { action } from '@storybook/addon-actions';
import { linkTo } from "@storybook/addon-links";

export default {
    title: 'Personal Details Component',
    decorators: [
      moduleMetadata({
        imports: [
                  HttpClientModule,
                  AppRoutingModule,
                  ReactiveFormsModule,
                  FormsModule,
                  BrowserModule
                ],
                declarations: [                
                  PersonalComponent,                
                ],
                providers: [ { provide: APP_BASE_HREF, useValue: "/" }]
      })
    ],
    parameters: {
      component: PersonalComponent,
    },
    providers: [ { provide: APP_BASE_HREF, useValue: "/" } ]
  };

  export const Default = () => ({
    component: PersonalComponent,
    props: {
      
    }
  });