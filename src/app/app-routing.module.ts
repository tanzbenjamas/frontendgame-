import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemomariamComponent } from './demomariam/demomariam.component';
import { Mariamgame1Component } from './mariamgame1/mariamgame1.component';
import { CorrectComponent } from './correct/correct.component';
import { WrongComponent } from './wrong/wrong.component';
import { SummaryComponent } from './summary/summary.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/intro', pathMatch: 'full' },
  { path: 'intro' ,component:DemomariamComponent },
  { path: 'summary' ,component:SummaryComponent },
  { path: 'mariamgame' ,component:Mariamgame1Component },
  { path: 'mariamgame/:quest_id' ,component:Mariamgame1Component },
  { path: 'correct/:quest_id' ,component:CorrectComponent },
  { path: 'wrong/:quest_id' ,component:WrongComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
