import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgSelectComponent } from './bg-select.component';

describe('BgSelectComponent', () => {
  let component: BgSelectComponent;
  let fixture: ComponentFixture<BgSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
