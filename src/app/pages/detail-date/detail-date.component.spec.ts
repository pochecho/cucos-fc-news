import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDetailComponent } from './detail-date.component';

describe('DetailDateComponent', () => {
  let component: DateDetailComponent;
  let fixture: ComponentFixture<DateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
