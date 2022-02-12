/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SectionsService } from './sections.service';

describe('Service: Sections', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SectionsService]
    });
  });

  it('should ...', inject([SectionsService], (service: SectionsService) => {
    expect(service).toBeTruthy();
  }));
});
