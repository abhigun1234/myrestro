import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrodetailsComponent } from './restrodetails.component';

describe('RestrodetailsComponent', () => {
  let component: RestrodetailsComponent;
  let fixture: ComponentFixture<RestrodetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrodetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
