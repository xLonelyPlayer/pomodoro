import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faPlay, faStop, faForward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  icons = {
    'fas fa-play': faPlay,
    'fas fa-stop': faStop,
    'fas fa-forward': faForward,
  }

  @Input() type: string = "button";
  @Input() class: string = "btn btn-outline-dark";
  @Input() customClass: string = "m-1";
  @Input() icon: string = "";
  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

}
