import { TestBed } from '@angular/core/testing';

import { SSkillService } from './s-skill.service';

describe('SSkillService', () => {
  let service: SSkillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSkillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
