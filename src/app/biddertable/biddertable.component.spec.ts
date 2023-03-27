import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddertableComponent } from './biddertable.component';

describe('BiddertableComponent', () => {
  let component: BiddertableComponent;
  let fixture: ComponentFixture<BiddertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiddertableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiddertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
