import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgEditComponent } from './bg-edit.component';

describe('BgEditComponent', () => {
  let component: BgEditComponent;
  let fixture: ComponentFixture<BgEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
