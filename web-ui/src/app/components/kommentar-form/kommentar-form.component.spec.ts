import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KommentarFormComponent } from './kommentar-form.component';

describe('KommentarFormComponent', () => {
  let component: KommentarFormComponent;
  let fixture: ComponentFixture<KommentarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KommentarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KommentarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
