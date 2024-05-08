import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerModule } from './timer/timer.module';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    TimerModule,
    SettingsModule,
  ],
  exports: [
    TimerModule,
    SettingsModule,
  ]
})
export class ComponentsModule { }
