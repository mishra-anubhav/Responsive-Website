import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PbodyComponent } from './pbody.component';

describe('PbodyComponent', () => {
  let component: PbodyComponent;
  let fixture: ComponentFixture<PbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
