import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerModule } from './timer/timer.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TimerModule
  ],
  exports: [
    TimerModule,
  ]
})
export class ComponentsModule { }
