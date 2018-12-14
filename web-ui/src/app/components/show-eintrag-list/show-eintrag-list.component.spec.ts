import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEintragListComponent } from './show-eintrag-list.component';

describe('ShowEintragListComponent', () => {
  let component: ShowEintragListComponent;
  let fixture: ComponentFixture<ShowEintragListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEintragListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEintragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
