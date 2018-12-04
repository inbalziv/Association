import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionOptionComponent } from './adoption-option.component';

describe('AdoptionOptionComponent', () => {
  let component: AdoptionOptionComponent;
  let fixture: ComponentFixture<AdoptionOptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionOptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
