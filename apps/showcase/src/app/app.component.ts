import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ComponentLibraryComponent } from '@angular-library/component-library';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, ComponentLibraryComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'showcase';
}
