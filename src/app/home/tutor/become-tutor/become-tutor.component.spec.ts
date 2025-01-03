import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecomeTutorComponent } from './become-tutor.component';

describe('BecomeTutorComponent', () => {
  let component: BecomeTutorComponent;
  let fixture: ComponentFixture<BecomeTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BecomeTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BecomeTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
