import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceBoardListComponent } from './advance-board-list.component';

describe('AdvanceBoardListComponent', () => {
  let component: AdvanceBoardListComponent;
  let fixture: ComponentFixture<AdvanceBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvanceBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
