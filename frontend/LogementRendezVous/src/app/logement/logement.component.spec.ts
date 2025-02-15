import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogementComponent } from './logement.component';

describe('LogementComponent', () => {
  let component: LogementComponent;
  let fixture: ComponentFixture<LogementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogementComponent]
    });
    fixture = TestBed.createComponent(LogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
