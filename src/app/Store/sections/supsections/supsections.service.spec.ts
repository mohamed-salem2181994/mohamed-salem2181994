/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SupsectionsService } from './supsections.service';

describe('Service: Supsections', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupsectionsService]
    });
  });

  it('should ...', inject([SupsectionsService], (service: SupsectionsService) => {
    expect(service).toBeTruthy();
  }));
});
