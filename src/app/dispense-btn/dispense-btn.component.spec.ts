import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispenseBtnComponent } from './dispense-btn.component';

describe('DispenseBtnComponent', () => {
  let component: DispenseBtnComponent;
  let fixture: ComponentFixture<DispenseBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispenseBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispenseBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
