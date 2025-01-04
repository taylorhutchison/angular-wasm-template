import { Component, inject } from '@angular/core';
import { LibService } from './lib.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  template: `
   <h1>{{greeting}}</h1>
   <p>Type a name to generate a greeting using WASM</p>
   <form>
     <input type="text" [(ngModel)]="name" name="name" (keyup)="generateGreeting()"/>
   </form>


  `,
  styles: [],
})
export class AppComponent {

  name: string = "";
  greeting: string = "Hello, World!";

  service = inject(LibService);

  generateGreeting() {
    this.greeting = this.service.greet(this.name);
  }

}
