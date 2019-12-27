import { TestBed, inject } from '@angular/core/testing';
import { MariamService } from './mariam.service';

describe('MariamService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MariamService]
    });
  });

  it('should be created', inject([MariamService], (service: MariamService) => {
    expect(service).toBeTruthy();
  }));
});
