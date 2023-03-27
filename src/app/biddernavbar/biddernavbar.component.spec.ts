import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddernavbarComponent } from './biddernavbar.component';

describe('BiddernavbarComponent', () => {
  let component: BiddernavbarComponent;
  let fixture: ComponentFixture<BiddernavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddernavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddernavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
