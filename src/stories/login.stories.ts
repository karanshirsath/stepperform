//login component story
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from "../app/components/login/login.component";
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
  title: 'Login Component',
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
                LoginComponent,                
              ],
              providers: [ { provide: APP_BASE_HREF, useValue: "/" }]
    })
  ],
  parameters: {
    component: LoginComponent,
  },
  providers: [ { provide: APP_BASE_HREF, useValue: "/" } ]
};

export const Default = () => ({
  component: LoginComponent,
  props: {
    
  }
});

