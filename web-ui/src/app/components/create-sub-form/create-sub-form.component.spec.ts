import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSubFormComponent } from './create-sub-form.component';

describe('CreateSubFormComponent', () => {
  let component: CreateSubFormComponent;
  let fixture: ComponentFixture<CreateSubFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSubFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSubFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
