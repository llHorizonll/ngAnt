import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardVoucherComponent } from './standard-voucher.component';

describe('StandardVoucherComponent', () => {
  let component: StandardVoucherComponent;
  let fixture: ComponentFixture<StandardVoucherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardVoucherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardVoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
