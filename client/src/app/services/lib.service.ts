import { Injectable } from '@angular/core';
import init, { greet } from '../../../../lib/pkg/project';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  private isInitialized = false;

  async init() {
    if (!this.isInitialized) {
      await init();
      this.isInitialized = true;
    }
  }

  greet(msg: string): string {
    return greet(msg);
  }

}
