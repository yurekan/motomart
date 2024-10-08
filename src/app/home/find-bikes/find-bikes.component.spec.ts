import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindBikesComponent } from './find-bikes.component';

describe('FindBikesComponent', () => {
  let component: FindBikesComponent;
  let fixture: ComponentFixture<FindBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FindBikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
