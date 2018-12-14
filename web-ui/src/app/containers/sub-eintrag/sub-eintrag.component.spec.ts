import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubEintragComponent } from './sub-eintrag.component';

describe('SubEintragComponent', () => {
  let component: SubEintragComponent;
  let fixture: ComponentFixture<SubEintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubEintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubEintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
