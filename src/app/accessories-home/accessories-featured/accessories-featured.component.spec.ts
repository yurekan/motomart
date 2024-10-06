import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesFeaturedComponent } from './accessories-featured.component';

describe('AccessoriesFeaturedComponent', () => {
  let component: AccessoriesFeaturedComponent;
  let fixture: ComponentFixture<AccessoriesFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesFeaturedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessoriesFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
