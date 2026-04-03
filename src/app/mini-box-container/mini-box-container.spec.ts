import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniBoxContainer } from './mini-box-container';

describe('MiniBoxContainer', () => {
  let component: MiniBoxContainer;
  let fixture: ComponentFixture<MiniBoxContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniBoxContainer],
    }).compileComponents();

    fixture = TestBed.createComponent(MiniBoxContainer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
