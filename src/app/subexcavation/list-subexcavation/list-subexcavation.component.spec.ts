import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubexcavationComponent } from './list-subexcavation.component';

describe('ListSubexcavationComponent', () => {
  let component: ListSubexcavationComponent;
  let fixture: ComponentFixture<ListSubexcavationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSubexcavationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSubexcavationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
