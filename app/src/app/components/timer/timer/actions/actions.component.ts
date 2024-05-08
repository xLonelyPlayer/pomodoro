import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss'
})

export class ActionsComponent {

  @Output() onStart: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onStop: EventEmitter<Event> = new EventEmitter<Event>();
  @Output() onSkip: EventEmitter<Event> = new EventEmitter<Event>();

}
