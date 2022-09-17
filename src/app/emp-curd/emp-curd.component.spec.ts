import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpCurdComponent } from './emp-curd.component';

describe('EmpCurdComponent', () => {
  let component: EmpCurdComponent;
  let fixture: ComponentFixture<EmpCurdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpCurdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpCurdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
