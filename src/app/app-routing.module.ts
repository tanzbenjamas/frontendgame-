import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemomariamComponent } from './demomariam/demomariam.component';

const appRoutes: Routes = [
  { path: 'demomariam' ,component:DemomariamComponent },
  { path: '',redirectTo: '/demomariam',pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
