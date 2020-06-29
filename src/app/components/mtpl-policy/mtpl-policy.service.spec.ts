import { TestBed } from '@angular/core/testing';

import { MtplPolicyService } from './mtpl-policy.service';

describe('MtplPolicyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MtplPolicyService = TestBed.get(MtplPolicyService);
    expect(service).toBeTruthy();
  });
});
