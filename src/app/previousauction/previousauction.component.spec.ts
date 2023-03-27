import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousauctionComponent } from './previousauction.component';

describe('PreviousauctionComponent', () => {
  let component: PreviousauctionComponent;
  let fixture: ComponentFixture<PreviousauctionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousauctionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousauctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
