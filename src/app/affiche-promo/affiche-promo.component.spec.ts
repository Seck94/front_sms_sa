import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePromoComponent } from './affiche-promo.component';

describe('AffichePromoComponent', () => {
  let component: AffichePromoComponent;
  let fixture: ComponentFixture<AffichePromoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichePromoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
