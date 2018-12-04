import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptionTemporaryComponent } from './adoption-temporary.component';

describe('AdoptionTemporaryComponent', () => {
  let component: AdoptionTemporaryComponent;
  let fixture: ComponentFixture<AdoptionTemporaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdoptionTemporaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionTemporaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
