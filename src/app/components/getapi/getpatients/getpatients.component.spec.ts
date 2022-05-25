import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetpatientsComponent } from './getpatients.component';

describe('GetpatientsComponent', () => {
  let component: GetpatientsComponent;
  let fixture: ComponentFixture<GetpatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetpatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetpatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
