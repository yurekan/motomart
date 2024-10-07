import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceHomeComponent } from './ecommerce-home.component';

describe('EcommerceHomeComponent', () => {
  let component: EcommerceHomeComponent;
  let fixture: ComponentFixture<EcommerceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommerceHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommerceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
