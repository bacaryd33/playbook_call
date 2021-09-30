import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketitemComponent } from './marketitem.component';

describe('MarketitemComponent', () => {
  let component: MarketitemComponent;
  let fixture: ComponentFixture<MarketitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
