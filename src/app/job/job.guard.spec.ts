import { TestBed, async, inject } from '@angular/core/testing';

import { JobGuard } from './job.guard';

describe('JobGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobGuard]
    });
  });

  it('should ...', inject([JobGuard], (guard: JobGuard) => {
    expect(guard).toBeTruthy();
  }));
});
