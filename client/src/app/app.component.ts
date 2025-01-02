import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import init, { greet } from '../../../lib/pkg';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'app';

  constructor() {
    init().then(() => {
      console.log(greet("Taylor"));
    });
  }
}
