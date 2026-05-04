import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RsrvDtls } from './rsrv-dtls';

describe('RsrvDtls', () => {
  let component: RsrvDtls;
  let fixture: ComponentFixture<RsrvDtls>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RsrvDtls],
    }).compileComponents();

    fixture = TestBed.createComponent(RsrvDtls);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
