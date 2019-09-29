import { TestBed } from '@angular/core/testing';

import { SearchQueryDetailsService } from './search-query-details.service';

describe('SearchQueryDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchQueryDetailsService = TestBed.get(SearchQueryDetailsService);
    expect(service).toBeTruthy();
  });
});
