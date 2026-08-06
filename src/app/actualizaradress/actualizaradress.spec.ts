import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actualizaradress } from './actualizaradress';

describe('Actualizaradress', () => {
  let component: Actualizaradress;
  let fixture: ComponentFixture<Actualizaradress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actualizaradress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Actualizaradress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
