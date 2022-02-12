/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SuproleService } from './suprole.service';

describe('Service: Suprole', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuproleService]
    });
  });

  it('should ...', inject([SuproleService], (service: SuproleService) => {
    expect(service).toBeTruthy();
  }));
});
