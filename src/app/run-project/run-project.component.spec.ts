import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunProjectComponent } from './run-project.component';

describe('RunProjectComponent', () => {
  let component: RunProjectComponent;
  let fixture: ComponentFixture<RunProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RunProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RunProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
