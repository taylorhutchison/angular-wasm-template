import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LibService } from '../services/lib.service';

export const libResolver: ResolveFn<boolean> = async (route, state) => {
  try {
    const libService = inject(LibService);
    await libService.init();
    return true;
  } catch {
    return false;
  }
};
