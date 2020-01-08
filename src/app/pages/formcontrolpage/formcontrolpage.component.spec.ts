import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcontrolpageComponent } from './formcontrolpage.component';

describe('FormcontrolpageComponent', () => {
  let component: FormcontrolpageComponent;
  let fixture: ComponentFixture<FormcontrolpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormcontrolpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormcontrolpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
