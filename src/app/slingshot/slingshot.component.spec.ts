import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlingshotComponent } from './slingshot.component';

describe('SlingshotComponent', () => {
  let component: SlingshotComponent;
  let fixture: ComponentFixture<SlingshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlingshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlingshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
