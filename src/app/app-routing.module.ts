import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  PageOverviewComponent
} from './components';

const routes: Routes = [
  {path : '', component : PageOverviewComponent, pathMatch : 'full'},
  {path : '**', redirectTo : ''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
