import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBlockComponent } from './product-block.component';

describe('ProductBlockComponent', () => {
  let component: ProductBlockComponent;
  let fixture: ComponentFixture<ProductBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
