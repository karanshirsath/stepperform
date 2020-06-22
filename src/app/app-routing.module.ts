import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { LoginComponent } from './components/login/login.component';
import { Tab2Component } from './components/tab2/tab2.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
//import { VInfoComponent } from './v-info.component';


const routes: Routes = [
  { path: 'form', component: Tab2Component },
  { path: 'signIn', component: LoginComponent },
  { path: 'tab2', component: TabsComponent},
  { path: 'tab', component: TabComponent},
  {path:'signUp',component:SignUpComponent},


{ path: '**', redirectTo: '/signUp', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
