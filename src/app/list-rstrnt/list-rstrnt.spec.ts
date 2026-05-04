import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRstrnt } from './list-rstrnt';

describe('ListRstrnt', () => {
  let component: ListRstrnt;
  let fixture: ComponentFixture<ListRstrnt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRstrnt],
    }).compileComponents();

    fixture = TestBed.createComponent(ListRstrnt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
