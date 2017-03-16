import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyouDetailComponent } from './busyou-detail.component';

describe('BusyouDetailComponent', () => {
  let component: BusyouDetailComponent;
  let fixture: ComponentFixture<BusyouDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyouDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyouDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
