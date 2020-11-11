import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubexcavationSideBarComponent } from './subexcavation-side-bar.component';

describe('SubexcavationSideBarComponent', () => {
  let component: SubexcavationSideBarComponent;
  let fixture: ComponentFixture<SubexcavationSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubexcavationSideBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubexcavationSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
