import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { movieDetailGuard } from './movie-detail.guard';

describe('movieDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => movieDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
