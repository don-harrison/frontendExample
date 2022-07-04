import { Injectable } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SecurityService } from './security.service';

@Injectable()
describe('SecurityService', () => {
  let service: SecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
