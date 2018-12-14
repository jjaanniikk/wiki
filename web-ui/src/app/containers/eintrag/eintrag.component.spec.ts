import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EintragComponent } from './eintrag.component';

describe('EintragComponent', () => {
  let component: EintragComponent;
  let fixture: ComponentFixture<EintragComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EintragComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EintragComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
