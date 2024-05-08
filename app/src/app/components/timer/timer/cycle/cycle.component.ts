import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrl: './cycle.component.scss'
})
export class CycleComponent {

  @Input() read: boolean = true;

}
