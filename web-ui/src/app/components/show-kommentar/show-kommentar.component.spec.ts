import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowKommentarComponent } from './show-kommentar.component';

describe('ShowKommentarComponent', () => {
  let component: ShowKommentarComponent;
  let fixture: ComponentFixture<ShowKommentarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowKommentarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowKommentarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
