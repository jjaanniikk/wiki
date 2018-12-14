import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEintragComponent } from './show-eintrag.component';

describe('ShowEintragComponent', () => {
  let component: ShowEintragComponent;
  let fixture: ComponentFixture<ShowEintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
