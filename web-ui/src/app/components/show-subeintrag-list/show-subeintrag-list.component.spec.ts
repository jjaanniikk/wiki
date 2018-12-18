import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubeintragListComponent } from './show-subeintrag-list.component';

describe('ShowSubeintragListComponent', () => {
  let component: ShowSubeintragListComponent;
  let fixture: ComponentFixture<ShowSubeintragListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSubeintragListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubeintragListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
