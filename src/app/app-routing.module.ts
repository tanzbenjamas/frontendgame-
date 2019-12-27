import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemomariamComponent } from './demomariam/demomariam.component';
import { Mariamgame1Component } from './mariamgame1/mariamgame1.component';
import { Mariamgame2Component } from './mariamgame2/mariamgame2.component';
import { CorrectComponent } from './correct/correct.component';
import { WrongComponent } from './wrong/wrong.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/demomariam', pathMatch: 'full' },
  { path: 'demomariam' ,component:DemomariamComponent },
  { path: 'mariamgame1' ,component:Mariamgame1Component },
  { path: 'mariamgame2' ,component:Mariamgame2Component },
  { path: 'correct' ,component:CorrectComponent },
  { path: 'wrong' ,component:WrongComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
