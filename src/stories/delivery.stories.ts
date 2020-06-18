//login component story
import { BrowserModule } from "@angular/platform-browser";
import {DeliveryComponent} from '../app/components/delivery/delivery.component';
import { HttpClientModule } from "@angular/common/http";
import { moduleMetadata } from "@storybook/angular";
import { AppRoutingModule } from "../app/app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { APP_BASE_HREF } from "@angular/common";
import { action } from '@storybook/addon-actions';
import { linkTo } from "@storybook/addon-links";


//@ts-ignore
import * as markdown from "./notes/log-in.readme.md";

export default {
  title: 'Delivery Component',
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
                DeliveryComponent,                
              ],
              providers: [ { provide: APP_BASE_HREF, useValue: "/" }]
    })
  ],
  parameters: {
    component: DeliveryComponent,
  },
  providers: [ { provide: APP_BASE_HREF, useValue: "/" } ]
};

export const Default = () => ({
  component: DeliveryComponent,
  props: {
    
  }
});

