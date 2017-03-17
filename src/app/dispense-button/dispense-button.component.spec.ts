import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseButtonComponent } from './dispense-button.component';

describe('DispenseButtonComponent', () => {
  let component: DispenseButtonComponent;
  let fixture: ComponentFixture<DispenseButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenseButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
