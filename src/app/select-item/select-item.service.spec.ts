/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectItemService } from './select-item.service';

describe('SelectItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectItemService]
    });
  });

  it('should ...', inject([SelectItemService], (service: SelectItemService) => {
    expect(service).toBeTruthy();
  }));
});
