import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizarcity } from './actualizarcity';

describe('Actualizarcity', () => {
  let component: Actualizarcity;
  let fixture: ComponentFixture<Actualizarcity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizarcity],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarcity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
