import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: 'form', component: TabComponent },
  { path: 'signIn', component: LoginComponent },
{ path: '**', redirectTo: '/signIn', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
