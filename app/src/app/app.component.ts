import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { SharedModule } from './components/shared/shared.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsModule, SharedModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
