import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadPage } from './head-page';

describe('HeadPage', () => {
  let component: HeadPage;
  let fixture: ComponentFixture<HeadPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadPage],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
