import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgValueComponent } from './bg-value.component';

describe('BgValueComponent', () => {
  let component: BgValueComponent;
  let fixture: ComponentFixture<BgValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgValueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
