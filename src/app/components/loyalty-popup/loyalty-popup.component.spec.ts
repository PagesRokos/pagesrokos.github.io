import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyPopupComponent } from './loyalty-popup.component';

describe('LoyaltyPopupComponent', () => {
  let component: LoyaltyPopupComponent;
  let fixture: ComponentFixture<LoyaltyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
