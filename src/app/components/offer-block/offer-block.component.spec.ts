import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBlockComponent } from './offer-block.component';

describe('OfferBlockComponent', () => {
  let component: OfferBlockComponent;
  let fixture: ComponentFixture<OfferBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
