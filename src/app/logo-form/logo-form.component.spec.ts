import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFormComponent } from './logo-form.component';

describe('LogoFormComponent', () => {
  let component: LogoFormComponent;
  let fixture: ComponentFixture<LogoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
