import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { ButtonsComponent } from './timer/buttons/buttons.component';
import { CycleComponent } from './timer/cycle/cycle.component';

@NgModule({
  declarations: [
    TimerComponent,
    ButtonsComponent,
    CycleComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TimerComponent,
    ButtonsComponent,
    CycleComponent,
  ]
})
export class TimerModule { }

