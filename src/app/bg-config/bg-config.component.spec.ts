import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgConfigComponent } from './bg-config.component';

describe('BgConfigComponent', () => {
  let component: BgConfigComponent;
  let fixture: ComponentFixture<BgConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgConfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BgConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
