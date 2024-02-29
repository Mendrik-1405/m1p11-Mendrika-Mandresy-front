import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdvInsertComponent } from './rdv-insert.component';

describe('RdvInsertComponent', () => {
  let component: RdvInsertComponent;
  let fixture: ComponentFixture<RdvInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RdvInsertComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RdvInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
