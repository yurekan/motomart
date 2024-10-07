import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceReviewComponent } from './ecommerce-review.component';

describe('EcommerceReviewComponent', () => {
  let component: EcommerceReviewComponent;
  let fixture: ComponentFixture<EcommerceReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
