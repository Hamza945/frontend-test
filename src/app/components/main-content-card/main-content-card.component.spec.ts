import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentCardComponent } from './main-content-card.component';

describe('MainContentCardComponent', () => {
  let component: MainContentCardComponent;
  let fixture: ComponentFixture<MainContentCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainContentCardComponent]
    });
    fixture = TestBed.createComponent(MainContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
