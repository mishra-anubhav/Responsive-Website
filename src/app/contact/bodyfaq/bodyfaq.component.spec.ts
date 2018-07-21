import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyfaqComponent } from './bodyfaq.component';

describe('BodyfaqComponent', () => {
  let component: BodyfaqComponent;
  let fixture: ComponentFixture<BodyfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
