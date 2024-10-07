import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunAppComponent } from './run-app.component';

describe('RunAppComponent', () => {
  let component: RunAppComponent;
  let fixture: ComponentFixture<RunAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
