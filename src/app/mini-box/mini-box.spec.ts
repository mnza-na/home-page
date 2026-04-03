import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBox } from './mini-box';

describe('MiniBox', () => {
  let component: MiniBox;
  let fixture: ComponentFixture<MiniBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniBox],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
