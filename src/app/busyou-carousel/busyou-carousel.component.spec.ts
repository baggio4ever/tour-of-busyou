import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusyouCarouselComponent } from './busyou-carousel.component';

describe('BusyouCarouselComponent', () => {
  let component: BusyouCarouselComponent;
  let fixture: ComponentFixture<BusyouCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusyouCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusyouCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
