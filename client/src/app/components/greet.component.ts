import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LibService } from '../services/lib.service';

@Component({
  selector: 'app-greet',
  imports: [FormsModule],
  template: `
       <h1>{{greeting}}</h1>
      <p>Type a name to generate a greeting using WASM</p>
      <form>
        <input type="text" [(ngModel)]="name" name="name" (keyup)="generateGreeting()"/>
      </form>
  `,
  styles: ``
})
export class GreetComponent {
  name: string = "";
  greeting: string = "Hello, World!";

  service = inject(LibService);

  generateGreeting() {
    this.greeting = this.service.greet(this.name);
  }
}
