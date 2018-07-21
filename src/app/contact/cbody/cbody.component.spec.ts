import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CbodyComponent } from './cbody.component';

describe('CbodyComponent', () => {
  let component: CbodyComponent;
  let fixture: ComponentFixture<CbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
