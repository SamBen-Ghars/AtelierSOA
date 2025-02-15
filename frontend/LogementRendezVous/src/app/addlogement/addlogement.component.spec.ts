import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlogementComponent } from './addlogement.component';

describe('AddlogementComponent', () => {
  let component: AddlogementComponent;
  let fixture: ComponentFixture<AddlogementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddlogementComponent]
    });
    fixture = TestBed.createComponent(AddlogementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
