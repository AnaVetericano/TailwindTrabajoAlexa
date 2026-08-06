import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listaradress } from './listaradress';

describe('Listaradress', () => {
  let component: Listaradress;
  let fixture: ComponentFixture<Listaradress>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listaradress]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listaradress);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
