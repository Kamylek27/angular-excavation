import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubexcavationComponent } from './create-subexcavation.component';

describe('CreateSubexcavationComponent', () => {
  let component: CreateSubexcavationComponent;
  let fixture: ComponentFixture<CreateSubexcavationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSubexcavationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubexcavationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
