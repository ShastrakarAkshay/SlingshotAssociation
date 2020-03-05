import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEventResultsComponent } from './match-event-results.component';

describe('MatchEventResultsComponent', () => {
  let component: MatchEventResultsComponent;
  let fixture: ComponentFixture<MatchEventResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEventResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEventResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
