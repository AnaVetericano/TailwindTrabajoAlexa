import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizarcountry } from './actualizarcountry';

describe('Actualizarcountry', () => {
  let component: Actualizarcountry;
  let fixture: ComponentFixture<Actualizarcountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizarcountry],
    }).compileComponents();

    fixture = TestBed.createComponent(Actualizarcountry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
