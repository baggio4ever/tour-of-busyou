import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyouListComponent } from './busyou-list.component';

describe('BusyouListComponent', () => {
  let component: BusyouListComponent;
  let fixture: ComponentFixture<BusyouListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyouListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
