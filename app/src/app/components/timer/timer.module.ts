import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerComponent } from './timer/timer.component';
import { ActionsComponent } from './timer/actions/actions.component';
import { CycleComponent } from './timer/cycle/cycle.component';
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        TimerComponent,
        ActionsComponent,
        CycleComponent,
    ],
    exports: [
        TimerComponent,
        ActionsComponent,
        CycleComponent,
        SharedModule,
    ],
    imports: [
        CommonModule,
        SharedModule,
    ]
})
export class TimerModule { }

