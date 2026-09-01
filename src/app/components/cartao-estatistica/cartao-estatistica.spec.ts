import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoEstatistica } from './cartao-estatistica';

describe('CartaoEstatistica', () => {
  let component: CartaoEstatistica;
  let fixture: ComponentFixture<CartaoEstatistica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoEstatistica],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoEstatistica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
