import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashUserComponent } from './cash-user.component';

describe('CashUserComponent', () => {
  let component: CashUserComponent;
  let fixture: ComponentFixture<CashUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
