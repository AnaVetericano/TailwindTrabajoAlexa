import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listarcity } from './listarcity';

describe('Listarcity', () => {
  let component: Listarcity;
  let fixture: ComponentFixture<Listarcity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listarcity],
    }).compileComponents();

    fixture = TestBed.createComponent(Listarcity);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
