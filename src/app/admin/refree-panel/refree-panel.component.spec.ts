import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreePanelComponent } from './refree-panel.component';

describe('RefreePanelComponent', () => {
  let component: RefreePanelComponent;
  let fixture: ComponentFixture<RefreePanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreePanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
