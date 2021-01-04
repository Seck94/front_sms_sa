import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpIntercepComponent } from './http-intercep.component';

describe('HttpIntercepComponent', () => {
  let component: HttpIntercepComponent;
  let fixture: ComponentFixture<HttpIntercepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpIntercepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpIntercepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
