import { TestBed } from '@angular/core/testing';

import { ProducServiceService } from './product-service.service';

describe('ProducServiceService', () => {
  let service: ProducServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProducServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
