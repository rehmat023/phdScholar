import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdvancedBoardComponent } from './add-advanced-board.component';

describe('AddAdvancedBoardComponent', () => {
  let component: AddAdvancedBoardComponent;
  let fixture: ComponentFixture<AddAdvancedBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdvancedBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdvancedBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
