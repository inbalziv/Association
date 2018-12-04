import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermanentlyAdoptionComponent } from './permanently-adoption.component';

describe('PermanentlyAdoptionComponent', () => {
  let component: PermanentlyAdoptionComponent;
  let fixture: ComponentFixture<PermanentlyAdoptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermanentlyAdoptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermanentlyAdoptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
