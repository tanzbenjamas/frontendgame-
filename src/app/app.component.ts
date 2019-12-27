import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { DemomariamComponent } from './demomariam/demomariam.component';

const routes: Routes = [
  { path: 'demomariam' ,component:DemomariamComponent },
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
}
