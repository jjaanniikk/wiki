import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEintragFormComponent } from './update-eintrag-form.component';

describe('UpdateEintragFormComponent', () => {
  let component: UpdateEintragFormComponent;
  let fixture: ComponentFixture<UpdateEintragFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEintragFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEintragFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
