import { TestBed } from '@angular/core/testing';

import { SubexcavationService } from './subexcavation.service';

describe('SubexcavationService', () => {
  let service: SubexcavationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubexcavationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
