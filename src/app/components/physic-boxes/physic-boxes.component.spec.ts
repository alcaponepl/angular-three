import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicBoxesComponent } from './physic-boxes.component';

describe('PhysicBoxesComponent', () => {
  let component: PhysicBoxesComponent;
  let fixture: ComponentFixture<PhysicBoxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysicBoxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
