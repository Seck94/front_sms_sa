import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGroupecompetenceComponent } from './list-groupecompetence.component';

describe('ListGroupecompetenceComponent', () => {
  let component: ListGroupecompetenceComponent;
  let fixture: ComponentFixture<ListGroupecompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGroupecompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGroupecompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
