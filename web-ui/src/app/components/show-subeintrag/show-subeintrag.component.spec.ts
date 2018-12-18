import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubeintragComponent } from './show-subeintrag.component';

describe('ShowSubeintragComponent', () => {
  let component: ShowSubeintragComponent;
  let fixture: ComponentFixture<ShowSubeintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowSubeintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSubeintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
