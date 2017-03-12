/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InsertCoinService } from './insert-coin.service';

describe('InsertCoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertCoinService]
    });
  });

  it('should ...', inject([InsertCoinService], (service: InsertCoinService) => {
    expect(service).toBeTruthy();
  }));
});
