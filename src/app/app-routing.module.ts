import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { LoginComponent } from './components/login/login.component';
import { Tab2Component } from './components/tab2/tab2.component';
//import { VInfoComponent } from './v-info.component';


const routes: Routes = [
  { path: 'form', component: Tab2Component },
  { path: 'signIn', component: LoginComponent },

{ path: '**', redirectTo: '/signIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
