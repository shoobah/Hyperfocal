import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CalculatorService } from './calculator.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SetParametersComponent } from './set-parameters/set-parameters.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { MdSliderModule } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    SetParametersComponent,
    DisplayResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSliderModule
  ],
  providers: [CalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
