import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBiddersComponent } from './view-bidders.component';

describe('ViewBiddersComponent', () => {
  let component: ViewBiddersComponent;
  let fixture: ComponentFixture<ViewBiddersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBiddersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBiddersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
