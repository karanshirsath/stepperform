import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabComponent } from './tab/tab.component';


const routes: Routes = [
  { path: 'form', component: TabComponent },
{ path: '**', redirectTo: '/form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
