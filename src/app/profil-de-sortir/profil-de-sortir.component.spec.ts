import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilDeSortirComponent } from './profil-de-sortir.component';

describe('ProfilDeSortirComponent', () => {
  let component: ProfilDeSortirComponent;
  let fixture: ComponentFixture<ProfilDeSortirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilDeSortirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilDeSortirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
