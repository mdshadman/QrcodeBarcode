import { TestBed } from '@angular/core/testing';

import { TahoeService } from './tahoe.service';

describe('TahoeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TahoeService = TestBed.get(TahoeService);
    expect(service).toBeTruthy();
  });
});
