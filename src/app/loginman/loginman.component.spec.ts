import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginmanComponent } from './loginman.component';

describe('LoginmanComponent', () => {
  let component: LoginmanComponent;
  let fixture: ComponentFixture<LoginmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginmanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
