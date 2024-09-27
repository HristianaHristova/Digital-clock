import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalSegmentComponent } from './digital-segment.component';

describe('DigitalSegmentComponent', () => {
  let component: DigitalSegmentComponent;
  let fixture: ComponentFixture<DigitalSegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalSegmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalSegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
