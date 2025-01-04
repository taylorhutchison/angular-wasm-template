import { Injectable } from '@angular/core';
import init, { greet } from '../../../lib/pkg';

@Injectable({
  providedIn: 'root'
})
export class LibService {

  private initialized = false;

  constructor() {
    this.init();
  }

  greet(msg: string): string {
    this.checkInitialized();
    return greet(msg);
  }

  // Wrap the wasm-bingen init so callers don't get back InitOutput they should not use.
  // Subsequent calls to init should be avoided, but are OK and much quicker than the inital call.
  async init() {
    await init();
    this.initialized = true;
  }

  checkInitialized() {
    if (!this.initialized) {
      throw new Error('You must call init() before using this service.');
    }
  }

}
