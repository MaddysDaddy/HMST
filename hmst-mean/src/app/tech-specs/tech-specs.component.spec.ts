import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechSpecsComponent } from './tech-specs.component';

describe('TechSpecsComponent', () => {
  let component: TechSpecsComponent;
  let fixture: ComponentFixture<TechSpecsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechSpecsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechSpecsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
