import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideaBarComponent } from './admin-sidea-bar.component';

describe('AdminSideaBarComponent', () => {
  let component: AdminSideaBarComponent;
  let fixture: ComponentFixture<AdminSideaBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideaBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideaBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
