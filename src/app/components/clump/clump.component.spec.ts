import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClumpComponent } from './clump.component';

describe('ClumpComponent', () => {
  let component: ClumpComponent;
  let fixture: ComponentFixture<ClumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
