import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReferntielComponent } from './add-referntiel.component';

describe('AddReferntielComponent', () => {
  let component: AddReferntielComponent;
  let fixture: ComponentFixture<AddReferntielComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReferntielComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReferntielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
