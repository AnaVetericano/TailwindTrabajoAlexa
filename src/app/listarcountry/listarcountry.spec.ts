import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarcountry } from './listarcountry';

describe('Listarcountry', () => {
  let component: Listarcountry;
  let fixture: ComponentFixture<Listarcountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarcountry],
    }).compileComponents();

    fixture = TestBed.createComponent(Listarcountry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
