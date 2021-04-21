import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyhttpComponent } from './myhttp.component';

describe('MyhttpComponent', () => {
  let component: MyhttpComponent;
  let fixture: ComponentFixture<MyhttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyhttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
