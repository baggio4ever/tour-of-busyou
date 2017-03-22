import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyouSearchComponent } from './busyou-search.component';

describe('BusyouSearchComponent', () => {
  let component: BusyouSearchComponent;
  let fixture: ComponentFixture<BusyouSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyouSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyouSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
