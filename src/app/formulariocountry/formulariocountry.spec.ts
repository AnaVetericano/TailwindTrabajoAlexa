import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulariocountry } from './formulariocountry';

describe('Formulariocountry', () => {
  let component: Formulariocountry;
  let fixture: ComponentFixture<Formulariocountry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formulariocountry],
    }).compileComponents();

    fixture = TestBed.createComponent(Formulariocountry);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
