import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule} from '@angular/material/expansion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { DemomariamComponent } from './demomariam/demomariam.component';
import { Mariamgame1Component } from './mariamgame1/mariamgame1.component';
import { Mariamgame2Component } from './mariamgame2/mariamgame2.component';
import { WrongComponent } from './wrong/wrong.component';
import { CorrectComponent } from './correct/correct.component';
import { MariamService } from './service/mariam.service';


const appRoutes: Routes = [
    { path: 'demomariam' ,component:DemomariamComponent },
    { path: 'mariamgame1' ,component:Mariamgame1Component },
    { path: 'mariamgame2' ,component:Mariamgame2Component },
    { path: 'wrong' ,component:WrongComponent },
    { path: 'correct' ,component:CorrectComponent },
  ];
@NgModule({
  declarations: [
    AppComponent,
    DemomariamComponent,
    Mariamgame1Component,
    Mariamgame2Component,
    WrongComponent,
    CorrectComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    MatFormFieldModule,
    MatMenuModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonToggleModule,
   
],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA],
  providers: [MariamService],
  bootstrap: [AppComponent]
})

export class AppModule { }


