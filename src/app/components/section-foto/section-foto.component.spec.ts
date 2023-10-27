import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFotoComponent } from './section-foto.component';

describe('SectionFotoComponent', () => {
  let component: SectionFotoComponent;
  let fixture: ComponentFixture<SectionFotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SectionFotoComponent]
    });
    fixture = TestBed.createComponent(SectionFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
