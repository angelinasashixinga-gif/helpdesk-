import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheTicket } from './detalhe-ticket';

describe('DetalheTicket', () => {
  let component: DetalheTicket;
  let fixture: ComponentFixture<DetalheTicket>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalheTicket],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheTicket);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
