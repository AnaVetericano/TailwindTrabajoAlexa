import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariocity } from './formulariocity';

describe('Formulariocity', () => {
  let component: Formulariocity;
  let fixture: ComponentFixture<Formulariocity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulariocity],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulariocity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
