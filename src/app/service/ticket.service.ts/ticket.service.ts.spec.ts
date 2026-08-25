import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketServiceTs } from './ticket.service.ts';

describe('TicketServiceTs', () => {
  let component: TicketServiceTs;
  let fixture: ComponentFixture<TicketServiceTs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketServiceTs],
    }).compileComponents();

    fixture = TestBed.createComponent(TicketServiceTs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
